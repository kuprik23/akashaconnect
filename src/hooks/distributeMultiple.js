import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { getBep20Contract } from "../utils/contractHelpers";
import BigNumber from "bignumber.js";

export const DistributeMultiple = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const tokenAddress = environment.disperser;
  const contract = getBep20Contract(tokenAddress, web3);
  const DisperseMulti = useCallback(
    async (allTotal, walletArr, userPrices) => {
      try {
        // allTotal = 0;
        // const tempArray = [...userPrices];
        // for (let elem = 0; elem < tempArray.length; elem++) {
        //   tempArray[elem] = web3.utils.toWei(
        //     JSON.stringify(tempArray[elem]),
        //     "ether"
        //   );
        //   allTotal += parseInt(tempArray[elem]);
        // }
        // // console.log("total sum::::", sum);

        // console.log("total::::", allTotal);

        // console.log("logs arr:::::", walletArr, tempArray);

        // const gas1 = await contract.methods
        //   .distributeMultiple(walletArr, tempArray)
        //   .estimateGas({
        //     from: account,
        //     value: allTotal,
        //     gasPrice: "1000000000",
        //   });

        // allTotal = parseFloat(
        //   web3.utils.fromWei(JSON.stringify(allTotal), "ether")
        // );

        // console.log("total::::", allTotal);

        // return 0;
        // let dummy = 3000 * allTotal?.length;
        // let gas = parseInt(gas1) + 26000;
        // let trxPrice = gas * 1050000000;
        // trxPrice = web3.utils.fromWei(JSON.stringify(trxPrice), "ether");

        // let bnbNeedPerTx = trxPrice / userPrices.length;

        // console.log("trxPrice", trxPrice);
        // console.log("bnbNeedPerTx", bnbNeedPerTx);
        // allTotal = 0;

        // for (let elem = 0; elem < userPrices.length; elem++) {
        //   userPrices[elem] = web3.utils.toWei(
        //     JSON.stringify(userPrices[elem] - bnbNeedPerTx),
        //     "ether"
        //   );
        //   allTotal += parseInt(userPrices[elem]);
        // }

        // let toSend = allTotal - parseInt(web3.utils.toWei(trxPrice , 'ether'));
        // toSend = new BigNumber(toSend).multipliedBy(new BigNumber(10).pow(18));
        // toSend = toSend.plus(new BigNumber(100))
        // console.log("userPrices", userPrices);

        allTotal = 0;
        const gasInBNB = 0.0010;
        const gas = 35000;
        const gasTotal = gas * walletArr.length;

        for (let elem = 0; elem < userPrices.length; elem++) {
          userPrices[elem] = web3.utils.toWei(
            JSON.stringify(userPrices[elem] - gasInBNB), "ether"
          )
          allTotal += parseInt(userPrices[elem])
        }

        const toSend = allTotal;

        console.log("gas",gasInBNB)
        console.log("gasTotal",gasTotal)
        console.log("toSend",toSend)

        const nfts = await contract.methods
          .distributeMultiple(walletArr, userPrices)
          .send({
            from: account,
            gas: gasTotal.toString(),
            gasPrice: "10000000000",
            value: toSend.toString(),
          })
          .on("transactionHash", (tx) => {
            return tx.transactionHash;
          })
          .catch((error) => {
            console.log("erorrrr in catcccchhh", error);
            return false;
          });
        return nfts;
      } catch (error) {
        console.log("error::::", error);
        return false;
      }
    },
    [account, contract]
  );

  return { DisperseMulti: DisperseMulti };
};

export default DistributeMultiple;
