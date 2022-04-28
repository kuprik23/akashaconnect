import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { SkeletonContract } from "../utils/contractHelpers";
import Web3 from "web3";

const Minting = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const contractAddress = environment.musabContract;

  const contract = SkeletonContract(contractAddress, web3);
  const userMinting = useCallback(
    async (mintVal, presale) => {
      let fees = await contract.methods.pricePresale().call();
      if(presale){
        fees = await contract.methods.pricePresale().call(); 
      } else {
        fees = await contract.methods.pricePublicSale().call();
      }
      let fees0 = parseInt(fees)/1000000000000000000;
      const MINT_NFT_FEE = mintVal * fees0;
      const details = await contract.methods
        .mintPresale(mintVal)
        .send({
          from: account,
          value: Web3.utils.toWei(MINT_NFT_FEE.toString(), "ether"),
        })
        .on("transactionHash", (tx) => {
          return tx.transactionHash;
        })
        .catch((err) => {
          return err;
        });
      return details;
    },
    [account, contract]
  );
  return { presMinting: userMinting };
};

export default Minting;
