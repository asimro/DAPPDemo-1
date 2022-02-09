import React, { useContext } from 'react';
import '../App.css';
import { UserContext } from '../context/contextAPI';
import { LoadAccountBalance, LoadBlockChain } from '../context/web3call';

export const Balance = () => {
    const [{ Accounts, BalanceOf, Contract }, dispatch] = useContext(UserContext)
    const Balance = BalanceOf;
    const acc = Accounts[0];

    return (
        <div className="divC">
            <h1> Customer Account Details  </h1>
            <h4 className="balance"> Account : &emsp; &emsp; &emsp; &emsp; &emsp;
                <a href="https://rinkeby.etherscan.io/token/0x9c31712dd1ee90bd72b38821603b7cc393314d01?a="
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Click here to check your account history">
                    {Accounts[0] > 0 ? (acc.substr(0, 6)) + "********" + (acc.substr(38, 4)) : " "}
                </a>
            </h4>
            <h4 className="balance">Token Balance :&emsp;&emsp; &emsp; {Balance} </h4>

            <button className="btnweb3" onClick={() => {
                LoadAccountBalance(Contract, dispatch);
                LoadBlockChain(dispatch)
            }
            }>
                {Accounts[0] > 0 ? "Connected" : "Connect Your Wallet"}
                <br />
            </button>
        </div>
    )
}
