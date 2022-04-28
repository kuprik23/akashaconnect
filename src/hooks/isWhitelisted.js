import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";

export const WhiteListed = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.musabContract;
    const contract = SkeletonContract(tokenAddress, web3);
    const isWhitelistedFunc = useCallback(
        async () => {
            try {
                const details = await contract.methods.isWhiteList(account).call();;
                return details;
            } catch (error) {
                console.log('errror of whitelisted===>', error)
            }

        },
        [contract]
    );

    return { wListed: isWhitelistedFunc };
};

export default WhiteListed;
