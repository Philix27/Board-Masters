import { isTestnet } from "../utils/env";
import { AppContractAbi } from "./abi";

export * from "./abi";
export * from "./cusdToken";

export const AppContract = {
  address: "0x3Cd18E1c3b3Ca1d0ede9748373eAfc2AEb87D085",
  abi: AppContractAbi,
  secondWallet: "0x462E5F272B8431562811126779da6EcaE51A5B40",
};

export function getContractAddress() {
  if (isTestnet) return "0x3Cd18E1c3b3Ca1d0ede9748373eAfc2AEb87D085";
  return "0xaDC89ab1516f104CfE2200fE1daA40C33DCf97b9";
}
