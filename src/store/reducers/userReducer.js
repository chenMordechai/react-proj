import types from "../types";

export default function
contactReducer(state = {user:null}, action) {
    switch (action.type) {
        case types.GET_USER:
            return {
                ...state, user: action.data
            };
        
        default:
            return state;
    }
}