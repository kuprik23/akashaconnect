import { useCallback } from 'react'
import { AkashaMintingContract } from '../../utils/contractHelpers'
import Environment from '../../utils/Environment'
import useWeb3 from '../useWeb3'
import Web3 from "web3";
import { useWeb3React } from '@web3-react/core';
function dcl1Mint() {
    const {account}=useWeb3React()
    const web3 = useWeb3()
    const contract = AkashaMintingContract(Environment.mintContract, web3)
    const mintingDCL1 = useCallback(async (mintAmount,nTokenInpo) => {
      const   mintAmount2 = web3.utils.toWei(mintAmount + '');
        console.log('djfasdflasflasfhuzaida',mintAmount2, nTokenInpo, mintAmount)
        try {
            let nTokens;
            const res = await contract.methods.mintDCL1(nTokenInpo).send({
                from: account,
                value: mintAmount2
            })
            console.log('res of the dcl1Minting', res)
        } catch (error) {
         
            console.log('Error of the dcl1Minting', error)
            throw error;
        }

    },[account,contract])
    return { mintingDCL1: mintingDCL1 };
}

export default dcl1Mint