import './App.css';
import React from 'react';
import { LoadBlockChain } from './context/web3call';
import { ContextProvider } from './context/contextAPI';
import { Balance } from './components/Balance';

function App() {

    return (
        <ContextProvider>
           
                <h1>  Helow world </h1>
                <Balance/>

            
        </ContextProvider>
    );
};
export default App;