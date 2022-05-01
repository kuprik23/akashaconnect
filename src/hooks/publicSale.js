import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";

export const CheckPublicSale = () => {
  const web3 = useWeb3();
  const tokenAddress = environment.mintContract;
  const contract = SkeletonContract(tokenAddress, web3);
  const Public = useCallback(
    async () => {
      const details = await contract.methods.whitelistPhase().call();
      return details;
    },
    [contract]
  );

  return { Public: Public };
};

export default CheckPublicSale;
