import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";

export const CheckMints = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.musabContract;
    const contract = SkeletonContract(tokenAddress, web3);
    console.log('ffffffffffffffffffff',account)
    const Mints = useCallback(
        async () => {
            try {
                if(account){
                const details = await contract.methods.numberOfMintsPerWallet(account).call();;
               
                console.log('iijhgfghjkjhgfghj',details); return details;
                }
            } catch (error) {
                console.log('rrrrrrrrr', error,account)

            }

        },
        [contract]
    );

    return { Mints: Mints };
};

export default CheckMints;
