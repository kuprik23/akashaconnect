import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";

export const CheckPurchase = () => {
  const web3 = useWeb3();
  const tokenAddress = environment.musabContract;
  const contract = SkeletonContract(tokenAddress, web3);
  const Purchase = useCallback(
    async () => {
      try {
        const details = await contract.methods.MaxPurchase().call();;
        // console.log('contractdetails======>', details)
        return details;
      } catch (error) {
        console.log('maxPurchaseError===>', error)
      }

    },
    [contract]
  );

  return { Purchase: Purchase };
};

export default CheckPurchase;
