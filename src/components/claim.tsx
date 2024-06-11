"use client";

import { useCallback, useState } from "react";
import {
  toEther,
  encode,
  sendTransaction,
  prepareTransaction,
  Hex,
  estimateGas,
  sendAndConfirmTransaction,
} from "thirdweb";
import { useWithdrawStaked } from "@/app/hooks/useWithdrawStaked";
import Safe from "@safe-global/protocol-kit";
import { ethers6Adapter } from "thirdweb/adapters/ethers6";
import { client } from "@/lib/client";
import { optimism } from "thirdweb/chains";
import { useActiveAccount, useActiveWallet } from "thirdweb/react";

export function ClaimRewards() {
  const [safeAddress, setSafeAddress] = useState(
    "0xB1fa7f7E4d2972a361392FdC4F7559542b4cA04A",
  );
  const account = useActiveAccount();

  const { stakingData, preparedTxs } = useWithdrawStaked(safeAddress);
  const executeSafeTransactions = useCallback(async () => {
    if (!account) {
      console.log("no signer");
      return;
    }

    const gnosisTransactions = await Promise.all(
      preparedTxs.map(async (v) => ({
        to: v.to as string,
        value: "0",
        data: await encode(v),
        operation: 0,
      })),
    );
    console.log(gnosisTransactions);
    console.log(
      `https://10.rpc.thirdweb.com/${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}`,
    );

    const protocolKit = await Safe.init({
      safeAddress: "0xB1fa7f7E4d2972a361392FdC4F7559542b4cA04A",
      provider: `https://10.rpc.thirdweb.com/${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}`,
    });
    const nonce = await protocolKit.getThreshold();

    const k = await protocolKit.createTransactionBatch(gnosisTransactions);

    const tx = prepareTransaction({
      chain: optimism,
      client,
      to: safeAddress,
      value: 0n,
      data: k.data as Hex,
    });

    console.log(nonce);
    console.log(k.data);

    try {
      const txs = await sendAndConfirmTransaction({
        account,
        transaction: tx,
      });

      console.log(txs);
    } catch (e) {
      console.log(e);
    }
  }, [preparedTxs, account]);

  return (
    <div className="flex flex-col w-full">
      <input
        defaultValue={safeAddress}
        onChange={(e) => {
          setSafeAddress(e.target.value);
        }}
      />

      <div className="flex flex-col">
        {stakingData.map(({ earnedRewards, nftData, tokenId }) => (
          <DepositDetailsComponent
            key={tokenId}
            amountToClaim={earnedRewards}
            name={nftData.metadata.name!}
            tokenId={tokenId}
          />
        ))}
      </div>
      <button
        onClick={() => {
          executeSafeTransactions();
        }}
      >
        unstake
      </button>
    </div>
  );
}

function DepositDetailsComponent(props: {
  name: string;
  tokenId: bigint;
  amountToClaim: bigint;
}) {
  return (
    <div className="py-3">
      <p>{props.name}</p>
      <p>{toEther(props.amountToClaim)}</p>
      <p>{props.tokenId.toLocaleString()}</p>
    </div>
  );
}
