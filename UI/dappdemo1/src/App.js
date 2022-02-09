import './App.css';
import React from 'react';
import { ContextProvider } from './context/contextAPI';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { AddBuyNFTsTrax } from './components/AddTrax';
import { TokenBalance } from './components/TokenHistory';

function App() {

    return (
        <ContextProvider>
            <div >
                <Header />
                <Balance />
                <TokenBalance />
                <AddBuyNFTsTrax />

            </div>

        </ContextProvider>
    );
};
export default App;