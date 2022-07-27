import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "../useWeb3";
import environment from "../../utils/Environment";
import { AkashaMintingContract } from '../../utils/contractHelpers'

 const CheckAcPrice2 = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.mintContract;
    const contract = AkashaMintingContract(tokenAddress, web3);
    const acPrice2 = useCallback(
        async (e) => {
            try {
                console.log(' acprice====contract===function')
                const res = await contract.methods.aCPrice().call();
                console.log(' acprice====contract===function====res',res)
                //  console.log('deta?ils=====custom jstatus=====>', details)
                return res;
            } catch (error) {
                console.log('error of the acprice====contract===function', error)
                throw error;
            }


        },
        [contract, account]

    );

    return { acPrice2: acPrice2 };
};

export default CheckAcPrice2;
