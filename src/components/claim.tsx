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
  sendBatchTransaction,
} from "thirdweb";
import { useWithdrawStaked } from "@/app/hooks/useWithdrawStaked";
import Safe from "@safe-global/protocol-kit";
import { ethers6Adapter } from "thirdweb/adapters/ethers6";
import { client } from "@/lib/client";
import { optimism } from "thirdweb/chains";
import {
  useActiveAccount,
  useActiveWallet,
  useSendBatchTransaction,
  useSendTransaction,
} from "thirdweb/react";

export function ClaimRewards() {
  const { mutate: sendTransaction, isPending } = useSendTransaction();
  const { mutate: sendBatchTransaction, isPending: isBatchPending } =
    useSendBatchTransaction();

  const [safeAddress, setSafeAddress] = useState(
    "0xb81D12E9D9f9cB044046b6d5830DA536e3205049",
  );

  const { stakingData, preparedTxs } = useWithdrawStaked(safeAddress);
  const account = useActiveAccount();

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
      <button onClick={() => {}}>unstake</button>
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
