import React, { useContext } from 'react';
import '../App.css';
import { UserContext } from '../context/contextAPI';

export const TokenBalance = () => {
    const [{
        TotalSupply,
        LastTokenID,
        Name,
        Symbol,
        Paused,
        ContractBalance,
        MaxSupply,
        NFTPrice
    }] = useContext(UserContext)


    return (
        <div className="divC">
            <div className='token_container'>
                <div >
                    Name: <br />
                    Symbol: <br />
                    NFTPrice: <br />
                    MaxSupply: <br />
                    TotalSupply: <br />
                    Paused: <br />
                    LastTokenID: <br />
                    ContractBalance: <br />
                </div>
                <div>
                    {Name}<br />
                    {Symbol}<br />
                    {NFTPrice}<br />
                    {MaxSupply}<br />
                    {TotalSupply}<br />
                    {Paused ? "Paused" : "Unpasued"}<br />
                    {LastTokenID}<br />
                    {ContractBalance}<br />
                </div>
            </div>
            {/* <div>
                    <h4>
                        <a href="https://rinkeby.etherscan.io/token/0x9c31712dd1ee90bd72b38821603b7cc393314d01#balances"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Click here to review the NFT Holder List">
                            <h4>
                                click here
                            </h4>
                        </a>
                    </h4>
                </div> */}
        </div>
    )

}
