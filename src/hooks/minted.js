import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";

export const CheckMint = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const tokenAddress = environment.musabContract;
  const contract = SkeletonContract(tokenAddress, web3);
  const BalanceOf = useCallback(
    async () => {
      const details = await contract.methods.TotalSupply().call();
      return details;
    },
    [contract]
  );

  return { minte: BalanceOf };
};

export default CheckMint;
