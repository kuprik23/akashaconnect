import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";
import axios from "axios";

export const ImageUri = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.musabContract;
    const contract = SkeletonContract(tokenAddress, web3);
    const imageuri = useCallback(
        async (e) => {
            try {
                const details = await contract.methods.uri(e).call();
                return details;
            } catch (error) {
                console.log('error of the second year is', error)
            }
        },
        [contract]

    );

    return { imageuriexport: imageuri };
};

export default ImageUri;
