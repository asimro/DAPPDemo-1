import Web3 from 'web3';
import { abi, contractAddress } from '../contract/abi.js';
import { getTotalSupply } from './Action.js';


export const LoadBlockChain = async (dispatch) => {


    try {
        if (Web3.givenProvider) {
            const web3 = new Web3(Web3.givenProvider);
            await web3.givenProvider.enable();
            console.log('Web3 Provider', web3);

            const accounts = await web3.eth.getAccounts();
            console.log("Account", accounts);

            const contract = new web3.eth.Contract(abi, contractAddress);
            console.log('contract :>> ', contract);

            // const Totalsupply = await contract.methods.totalSupply().call();
            // console.log("Total Supply", Totalsupply);
            // dispatch(getTotalSupply(Totalsupply));

            // const bO = await contract.methods.balanceOf(accounts[0]).call();
            // console.log("Balance of", bO);

            // const lTID = await contract.methods.lastTokenID().call();
            // console.log("Last Token ID", lTID);

            // const cBal = await contract.methods.contractBalance().call();
            // const cB = web3.utils.fromWei(cBal, 'ether');
            // console.log("Contract Balance", `${cB} eth`);

            const Totalsupply = await contract.methods._maxSupply().call();
            console.log("Maximum Supply", Totalsupply);
            dispatch(getTotalSupply(Totalsupply));

            // const gNFTPrice = await contract.methods.getNFTPrice().call();
            // const gNFTP = await web3.utils.fromWei(gNFTPrice, 'ether');
            // console.log("NFT Price", `${gNFTP} eth`);

            // const tURI = await contract.methods.tokenURI("5").call();
            // console.log("Token URI", tURI);

        }


    } catch (error) {
        console.log('Web3 Load Error', error);

    };
};

LoadBlockChain()



