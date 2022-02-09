import Web3 from 'web3';
import { abi, contractAddress } from '../contract/abi.js';
import {
    getWeb3,
    getAccounts,
    getContract,
    getTotalSupply,
    getBalanceOf,
    getLastTokenID,
    getName,
    getSymbol,
    getPaused,
    getContractBalance,
    getMaxSupply,
    getNFTPrice,
    getTokenURI
} from './Action.js';


export const LoadBlockChain = async (dispatch) => {
    try {
        if (Web3.givenProvider) {
            const web3 = new Web3(Web3.givenProvider);
            await web3.givenProvider.enable();
            console.log('Web3 Provider', web3);
            dispatch(getWeb3(web3));

            const accounts = await web3.eth.getAccounts();
            console.log("Account", accounts);
            dispatch(getAccounts(accounts));

            const contract = new web3.eth.Contract(abi, contractAddress);
            console.log('contract :>> ', contract);
            dispatch(getContract(contract));

            const Totalsupply = await contract.methods.totalSupply().call();
            console.log("Total Supply", Totalsupply);
            dispatch(getTotalSupply(Totalsupply));

            const balanceof = await contract.methods.balanceOf(accounts[0]).call();
            console.log("Balance of", balanceof);
            dispatch(getBalanceOf(balanceof));

            const lastTokenID = await contract.methods.lastTokenID().call();
            console.log("Last Token ID", lastTokenID);
            dispatch(getLastTokenID(lastTokenID));

            const name = await contract.methods.name().call();
            console.log("name", name);
            dispatch(getName(name));

            const symbol = await contract.methods.symbol().call();
            console.log("symbol", symbol);
            dispatch(getSymbol(symbol));

            const paused = await contract.methods.paused().call();
            console.log("paused", paused);
            dispatch(getPaused(paused));

            const cBal = await contract.methods.contractBalance().call();
            const contractBalance = web3.utils.fromWei(cBal, 'ether');
            console.log("Contract Balance", `${contractBalance} eth`);
            dispatch(getContractBalance(contractBalance));

            const maxSupply = await contract.methods._maxSupply().call();
            console.log("Maximum Supply", maxSupply);
            dispatch(getMaxSupply(maxSupply));

            const gNFTPrice = await contract.methods.getNFTPrice().call();
            const NFTPrice = web3.utils.fromWei(gNFTPrice, 'ether');
            console.log("NFT Price", `${NFTPrice} eth`);
            dispatch(getNFTPrice(NFTPrice));

            const tokenURI = await contract.methods.tokenURI("5").call();
            console.log("Token URI", tokenURI);
            dispatch(getTokenURI(tokenURI));
        }
    } catch (error) {
        console.log('LoadBlockChain Error', error);
    };
};
// LoadBlockChain()

export const LoadAccountBalance = async (Contract, dispatch) => {
    try {
        if (Web3.givenProvider) {
            const web3 = new Web3(Web3.givenProvider);
            await web3.givenProvider.enable();
            // console.log('Web3 Provider', web3);
            dispatch(getWeb3(web3));

            const accounts = await web3.eth.getAccounts();
            // console.log("Account", accounts);
            dispatch(getAccounts(accounts));


            const balanceof = await Contract.methods.balanceOf(accounts[0]).call();
            // console.log("Balance of", balanceof);
            dispatch(getBalanceOf(balanceof));

        }
    } catch (error) {
        console.log('LaodAccountBalance Error', error);
    };
};

