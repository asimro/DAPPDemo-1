import { createContext, useEffect, useReducer } from "react";
import { AppReducer } from "./Reducer";
import { LoadBlockChain } from "./web3call";


const initialState = {
    totalSupply: ""
}


export const UserContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    useEffect(() => {
        LoadBlockChain(dispatch)
    }, []);


    return (
        <UserContext.Provider value={[state, dispatch]}>

            {children}
        </UserContext.Provider>
    )
}