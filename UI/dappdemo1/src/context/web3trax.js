import Web3 from "web3";
import { setTraxBuyNFTs } from './Action';


export const TraxBuyNFTs = async (Accounts, Contract, Transaction, dispatch) => {
    try {

        const web3 = new Web3(Web3.givenProvider);
        await web3.givenProvider.enable();

        const buyNFTsTrax = Contract.methods.buyNFTs(
            Transaction.Address,
            Transaction.NoOfNFTs)
            .send({
                from: Accounts[0],
                value: web3.utils.toWei(Transaction.Amount, 'ether')
            });
        console.log('buyNFTsTrax', buyNFTsTrax);
        dispatch(setTraxBuyNFTs(Transaction));

    } catch (error) {
        console.log('Buy NFTs Transaction: ', error);

    }
};
