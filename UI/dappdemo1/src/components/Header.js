import '../App.css';
import React, { useContext } from "react";
import { UserContext } from "../context/contextAPI";


export const Header = () => {
    const [{ Symbol, Contract }] = useContext(UserContext);

    return (
        <div className='divC'>
            <h1>
                {Symbol} Sale Kick Off
            </h1>
            <div>
                <a href="https://rinkeby.etherscan.io/token/0x9c31712dd1ee90bd72b38821603b7cc393314d01"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Click here to review the contract">
                    <div className="divC">
                        <h2>
                            Contract Address : {Contract._address}
                        </h2>
                    </div>
                </a>
            </div>
        </div>
    )
}