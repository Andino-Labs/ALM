"use client";

import { nftContract } from "@/lib/contracts/nftContract";
import { rewardContract } from "@/lib/contracts/rewardContract";
import {
  stakedValues,
  earned,
  getReward,
  withdraw,
} from "@/thirdweb/10/0x3914e354979e6bc63782512bddb24c224e81a1bd";
import { useState, useCallback, useEffect, useMemo } from "react";
import { NFT, PreparedTransaction, encode } from "thirdweb";
import { getNFT } from "thirdweb/extensions/erc721";
import { useActiveWallet } from "thirdweb/react";

type DepositDetails = {
  tokenId: bigint;
  earnedRewards: bigint;
  nftData: NFT;
};

export function useWithdrawStaked(safeAddress: string) {
  const address = useActiveWallet();
  const [stakingData, setStakingData] = useState<DepositDetails[]>([]);
  const [preparedTxs, setPreparedTxs] = useState<PreparedTransaction[]>([]);
  const getStaked = useCallback(async () => {
    const stakedNfts = await stakedValues({
      contract: rewardContract,
      depositor: safeAddress,
    });

    const pendingRewards = await Promise.all(
      stakedNfts.map(async (id) => {
        const earnedRewards = await earned({
          account: safeAddress,
          contract: rewardContract,
          tokenId: id,
        });
        const nftData = await getNFT({
          contract: nftContract,
          tokenId: id,
        });

        return {
          tokenId: id,
          earnedRewards,
          nftData,
        };
      }),
    );

    setStakingData(pendingRewards);
  }, [safeAddress]);

  useEffect(() => {
    if (address) getStaked();
  }, [getStaked, address]);

  useEffect(() => {
    async function compileTxs() {
      const data = await Promise.all(
        stakingData.map(async (v) => {
          const rewards = getReward({
            contract: rewardContract,
            tokenId: v.tokenId,
          });

          const withdraws = await withdraw({
            contract: rewardContract,
            tokenId: v.tokenId,
          });

          return [rewards, withdraws];
        }),
      );

      const preparedTxLis = data.flat();
      console.log(preparedTxLis);
      setPreparedTxs(preparedTxLis);
    }
    compileTxs();
  }, [stakingData]);

  return {
    stakingData,
    preparedTxs,
  };
}
