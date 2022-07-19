import { useCallback } from 'react'
import { AkashaMintingContract } from '../../utils/contractHelpers'
import Environment from '../../utils/Environment'
import useWeb3 from '../useWeb3'
import Web3 from "web3";
import { useWeb3React } from '@web3-react/core';
function Dcl2Mint() {
    const {account}=useWeb3React()
    const web3 = useWeb3()
    const contract = AkashaMintingContract(Environment.mintContract, web3)
    const mintingAc = useCallback(async (mintAmount,nTokenInpo) => {
      const   mintAmount2 = web3.utils.toWei(mintAmount + '');
        console.log('djfasdflasflasfhuzaida',mintAmount2, nTokenInpo, mintAmount)
        try {
            let nTokens;
            const res = await contract.methods.mintDCL2(nTokenInpo).send({
                from: account,
                value: mintAmount2
            })
            console.log('res of the Dcl2Minting', res)
        } catch (error) {
         
            console.log('Error of the Dcl2Minting', error)
            throw error;
        }

    },[account,contract])
    return { mintingAc: mintingAc };
}

export default Dcl2Mint