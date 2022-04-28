import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";

export const CheckWhiteTwo = () => {
  const web3 = useWeb3();
  const tokenAddress = environment.musabContract;
  const contract = SkeletonContract(tokenAddress, web3);
  const WhiteTwo = useCallback(
    async () => {
      const details = await contract.methods.whitelistPhase2().call();
      return details;
    },
    [contract]
  );

  return { WhiteTwo: WhiteTwo };
};

export default CheckWhiteTwo;
