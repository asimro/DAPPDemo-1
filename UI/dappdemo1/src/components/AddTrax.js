import React, { useState, useContext } from 'react'
import { UserContext } from '../context/contextAPI';
import { TraxBuyNFTs } from '../context/web3trax';
import { LoadBlockChain, LoadAccountBalance } from '../context/web3call';
import '../App.css';


export const AddBuyNFTsTrax = () => {
    const [amount, setAmount] = useState();
    const [countNFTs, setcountNFTs] = useState();
    const [description, setDescription] = useState();  //receiver address
    const [{ Accounts, Contract, Symbol, NFTPrice }, dispatch] = useContext(UserContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const Transaction = {
                Address: description,
                Amount: amount,
                NoOfNFTs: countNFTs
            }
            console.log(Transaction);

            await TraxBuyNFTs(Accounts, Contract, Transaction, dispatch);
            await LoadAccountBalance(Contract, dispatch);
            await LoadBlockChain(dispatch);
        }
        catch (error) {
            console.log("error onSubmit trax = ", error);
        }
    }

    return (
        <div className='divC'>
            <div>
                <h1>Buy {Symbol} NFT Here  </h1>
            </div>
            <h4> Use &nbsp; Rinkeby &nbsp; Network </h4>

            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Receiver Address
                    </label>
                    <input type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Transaction Details"
                        required="required"
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Ether Amount &emsp; ({NFTPrice + " "} per Ether)
                    </label>
                    <input type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter Exact amount of Eth (No of NFTs * Price) "
                        required="required"
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="countNFTs">
                        Number of NFTs
                    </label>
                    <input type="number"
                        id="countNFTs"
                        value={countNFTs}
                        onChange={(e) => setcountNFTs(e.target.value)}
                        placeholder="Please enter the Number of NFTs, wish to buy"
                        required="required"
                    />
                </div>
                <button className="btnweb3" >
                    Grab Your NFT
                </button>
            </form>
        </div>
    )
}
