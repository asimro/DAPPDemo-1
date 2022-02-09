const Web3 = require('web3');
const rpcURL = "HTTP://127.0.0.1:7545";
const web3 = new Web3(rpcURL);
require('dotenv').config();

const Trx = require('@ethereumjs/tx');
const Tx = Trx.Transaction;

const account = '0xf260495311E8970a0063A4e81E30e4f951DB7041';
const account1 = '0x662a9D06128Ac492c319a864B737c054e35Cd3e5';

const private_key = process.env["PvtKeyAccount"];
const Private_KeyS = Buffer.from(private_key, 'hex');

let abi = require("./abi.js");
const contractAddress = "0x60D492AFA1B39c296828D29f5546E4357718Dd8F";
const contract = new web3.eth.Contract(abi, contractAddress);


const contractWrite = async () => {
    try {

        // calling contract as transaction
        let txCount = await web3.eth.getTransactionCount(account);
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            to: contractAddress,
            value: web3.utils.toHex(web3.utils.toWei("0.1", 'ether')),
            data: contract.methods.buyNFTs(account1, "1").encodeABI(),
            gasLimit: web3.utils.toHex(60000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
        }

        // signing transaction with private key
        const tx = new Tx(txObject);            //, { chain: '5777', hardfork: 'muirGlacier' });
        const signedTrax = tx.sign(Private_KeyS);

        const serializedTx = signedTrax.serialize();
        const raw = '0x' + serializedTx.toString('hex');

        // sending transaction on blockchain
        const singedTransaction = await web3.eth.sendSignedTransaction(raw);
        console.log("singedTransaction", singedTransaction);

        const blockdata = await web3.eth.getBlock("latest");
        console.log('blockdata', blockdata);
        console.log('timestamp . operator', blockdata.timestamp);



        // calling contract as read only
        const tS = await contract.methods.totalSupply().call();
        console.log("Total Supply", tS);

        const bO = await contract.methods.balanceOf(account).call();
        console.log("Balance of", bO);

        const lTID = await contract.methods.lastTokenID().call();
        console.log("Last Token ID", lTID);

        const cBal = await contract.methods.contractBalance().call();
        const cB = await web3.utils.fromWei(cBal, 'ether');
        console.log("Contract Balance", `${cB} eth`);

        const tURI = await contract.methods.tokenURI(lTID).call();
        console.log("Token URI", tURI);
    }

    catch (error) {
        console.log('error in contracWrite', error);
    }
}
contractWrite();
