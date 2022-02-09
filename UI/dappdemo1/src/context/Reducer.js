export const AppReducer = (state, action) => {
    switch (action.type) {

        case 'Get_Web3':
            return {
                ...state, Web3: action.payload
            }

        case 'Get_Accounts':
            return {
                ...state, Accounts: action.payload
            }
        case 'Get_Contract':
            return {
                ...state, Contract: action.payload
            }
        case 'Get_TotalSupply':
            return {
                ...state, TotalSupply: action.payload
            }
        case 'Get_BalanceOf':
            return {
                ...state, BalanceOf: action.payload
            }
        case 'Get_LastTokenID':
            return {
                ...state, LastTokenID: action.payload
            }
        case 'Get_Name':
            return {
                ...state, Name: action.payload
            }
        case 'Get_Symbol':
            return {
                ...state, Symbol: action.payload
            }
        case 'Get_Paused':
            return {
                ...state, Paused: action.payload
            }
        case 'Get_ContractBalance':
            return {
                ...state, ContractBalance: action.payload
            }
        case 'Get_MaxSupply':
            return {
                ...state, MaxSupply: action.payload
            }
        case 'Get_NFTPrice':
            return {
                ...state, NFTPrice: action.payload
            }
        case 'Get_TokenURI':
            return {
                ...state, TokenURI: action.payload
            }

        case 'Set_TraxBuyNFTs':
            return {
                ...state, buyNFTsTrax: [action.payload, ...state.buyNFTsTrax]
            }

        default:
            return state;
    }
}