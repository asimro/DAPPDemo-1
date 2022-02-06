const Web3 = require('web3');
const rpcURL = "HTTP://127.0.0.1:7545";

const web3 = new Web3(rpcURL);

const account = '0xf260495311E8970a0063A4e81E30e4f951DB7041';
const account1 = '0x662a9D06128Ac492c319a864B737c054e35Cd3e5';

const abi = require("./abi.js");
const contractAddress = "0x60D492AFA1B39c296828D29f5546E4357718Dd8F";


const contractRead = async () => {
    try {
        const contract = new web3.eth.Contract(abi, contractAddress);

        const tS = await contract.methods.totalSupply().call();
        console.log("Total Supply", tS);

        const bO = await contract.methods.balanceOf(account).call();
        console.log("Balance of", bO);

        const lTID = await contract.methods.lastTokenID().call();
        console.log("Last Token ID", lTID);

        const cBal = await contract.methods.contractBalance().call();
        const cB = await web3.utils.fromWei(cBal, 'ether');
        console.log("Contract Balance", `${cB} eth`);

        const mS = await contract.methods._maxSupply().call();
        console.log("Maximum Supply", mS);

        const gNFTPrice = await contract.methods.getNFTPrice().call();
        const gNFTP = await web3.utils.fromWei(gNFTPrice, 'ether');
        console.log("NFT Price", `${gNFTP} eth`);

        const tURI = await contract.methods.tokenURI("5").call();
        console.log("Token URI", tURI);


    }

    catch (error) {
        console.log('error in contracRead', error);
    }
}

contractRead();




