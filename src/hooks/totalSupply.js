import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";

export const CheckMints2 = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.musabContract;
    const contract = SkeletonContract(tokenAddress, web3);
    console.log('ffffffffffffffffffff',account)
    const Mints2 = useCallback(
        async () => {
            try {
                if(account){
                const details = await contract.methods.TotalSupply().call();;
               return details
                console.log('totalsupply========>',details); ;
                }
            } catch (error) {
                console.log('errrrorororororo', error)

            }

        },
        [contract]
    );

    return { Mints2: Mints2 };
};

export default CheckMints2;
