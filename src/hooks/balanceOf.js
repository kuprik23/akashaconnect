import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";

export const CheckBalance = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.musabContract;
    const contract = SkeletonContract(tokenAddress, web3);
    const balanceOf = useCallback(
        async (e) => {
            try {
                console.log(' befto login')
                const details = await contract.methods.balanceOf(account, e).call();
                //  console.log('deta?ils=====custom jstatus=====>', details)
                return details;
            } catch (error) {
                console.log('error of the year', error)
            }


        },
        [contract]

    );

    return { balance: balanceOf };
};

export default CheckBalance;
