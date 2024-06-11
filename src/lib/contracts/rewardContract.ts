import { getContract } from "thirdweb";
import { optimism } from "thirdweb/chains";
import { client } from "@/lib/client";

export const rewardContract = getContract({
  client,
  address: "0x3914e354979e6bc63782512Bddb24C224E81a1bD",
  chain: optimism,
});
