import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "../useWeb3";
import environment from "../../utils/Environment";
import { AkashaMintingContract } from '../../utils/contractHelpers'

 const CheckAcSupply = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.mintContract;
    const contract = AkashaMintingContract(tokenAddress, web3);
    const acSupply = useCallback(
        async (e) => {
            try {
                console.log(' acpreprice====contract===function')
                const res = await contract.methods.dCL3Supply().call();
                console.log(' dcl3supply====contract===function====res',res)
                //  console.log('deta?ils=====custom jstatus=====>', details)
                return res;
            } catch (error) {
                console.log('error of the acpreprice====contract===function', error)
                throw error;
            }


        },
        [contract, account]

    );

    return { acSupply: acSupply };
};

export default CheckAcSupply;
