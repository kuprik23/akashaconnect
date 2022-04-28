import web3NoAccount from "./web3";
import tickting from "./tickting.json";


const getContract = (abi, address, web3) => {
    const _web3 = web3 ?? web3NoAccount;
    return new _web3.eth.Contract(abi, address);
};

// export const tokenContract = (address, web3) => {
//     return getContract(tokenAbi, address, web3)
// }

// export const StakeContract = (address, web3) => {
//     return getContract(stakeAbi, address, web3)
// }

// export const ApproveContract = (address, web3) => {
//     return getContract(approveAbi, address, web3)
// }

export const SkeletonContract = (address, web3) => {
    return getContract(tickting, address, web3);
};



