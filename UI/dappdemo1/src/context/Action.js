export const getWeb3 = (Web3) => {
    return {
        type: 'Get_Web3',
        payload: Web3
    }
}

export const getAccounts = (Accounts) => {
    return {
        type: 'Get_Accounts',
        payload: Accounts
    }
}

export const getContract = (Contract) => {
    return {
        type: 'Get_Contract',
        payload: Contract
    }
}

export const getTotalSupply = (Totalsupply) => {
    return {
        type: 'Get_TotalSupply',
        payload: Totalsupply
    }
}

export const getBalanceOf = (BalanceOf) => {
    return {
        type: 'Get_BalanceOf',
        payload: BalanceOf
    }
}

export const getLastTokenID = (LastTokenID) => {
    return {
        type: 'Get_LastTokenID',
        payload: LastTokenID
    }
}

export const getName = (Name) => {
    return {
        type: 'Get_Name',
        payload: Name
    }
}

export const getSymbol = (Symbol) => {
    return {
        type: 'Get_Symbol',
        payload: Symbol
    }
}

export const getPaused = (Paused) => {
    return {
        type: 'Get_Paused',
        payload: Paused
    }
}

export const getContractBalance = (ContractBalance) => {
    return {
        type: 'Get_ContractBalance',
        payload: ContractBalance
    }
}

export const getMaxSupply = (MaxSupply) => {
    return {
        type: 'Get_MaxSupply',
        payload: MaxSupply
    }
}

export const getNFTPrice = (NFTPrice) => {
    return {
        type: 'Get_NFTPrice',
        payload: NFTPrice
    }
}

export const getTokenURI = (TokenURI) => {
    return {
        type: 'Get_TokenURI',
        payload: TokenURI
    }
}

export const setTraxBuyNFTs = (Transaction) => {
    return {
        type: 'Set_TraxBuyNFTs',
        payload: Transaction
    }
}
