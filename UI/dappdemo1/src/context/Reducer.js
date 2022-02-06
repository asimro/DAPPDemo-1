export const AppReducer = (state, action) => {
    switch (action.type) {

        case 'Get_TotalSupply':
            return {
                ...state, totalSupply: action.payload
            }

        default:
            return state;
    }
}