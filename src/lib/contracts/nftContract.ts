import { getContract } from "thirdweb";
import { client } from "@/lib/client";
import { optimism } from "thirdweb/chains";

export const nftContract = getContract({
  client,
  address: "0xbB5DFE1380333CEE4c2EeBd7202c80dE2256AdF4",
  chain: optimism,
});
