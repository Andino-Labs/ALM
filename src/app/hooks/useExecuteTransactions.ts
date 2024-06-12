import { useCallback, useState } from "react";
import {
  PreparedTransaction,
  sendAndConfirmTransaction,
  sendBatchTransaction,
  sendTransaction,
} from "thirdweb";
import { useActiveAccount } from "thirdweb/react";

export default function useExecuteTransaction(
  preparedTxs: PreparedTransaction[],
) {
  const account = useActiveAccount();
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const executeTransactionsInOrder = useCallback(async () => {
    if (!account) {
      console.log("no signer");
      return;
    }

    try {
      setIsloading(true);
      if (account.sendBatchTransaction) {
        const tx = await sendBatchTransaction({
          account,
          transactions: preparedTxs,
        });
        setData([tx.transactionHash]);
      } else {
        const transactions = preparedTxs.map(async (v) => {
          return sendAndConfirmTransaction({
            account,
            transaction: v,
          });
        });

        const k = await Promise.all(transactions);
        setData(k.map((v) => v.transactionHash));
      }
    } catch (e) {
      setIsloading(false);
    }
  }, [account, preparedTxs]);

  return {
    executeTransactionsInOrder,
    isLoading,
    data,
  };
}
