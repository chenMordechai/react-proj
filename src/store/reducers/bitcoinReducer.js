import types from "../types";

export default function
contactReducer(state = {
    rate: null,
    marketPrice:[],
    confirmTransactions:[]
}, action) {
    switch (action.type) {
        case types.GET_RATE:
            return {
                ...state, rate: action.data
            };
        case types.GET_STATICS1:
            return {
                ...state, marketPrice: action.data
            };
        case types.GET_STATICS2:
            return {
                ...state, confirmTransactions: action.data
            };

        default:
            return state;
    }
}