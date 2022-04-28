import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";

export const GetMint = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const contractAddress = environment.musabContract;

  const contract = SkeletonContract(contractAddress, web3);
  const getStatusMint = useCallback(async () => {
    const appr = await contract.methods
      .presale()
      .call();
    return appr;
  }, [account, contract]);

  return { StatusMint: getStatusMint };
};

export default GetMint;
