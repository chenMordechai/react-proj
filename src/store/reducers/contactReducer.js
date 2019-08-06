import types from "../types";

export default function 
    contactReducer(state = {contacts:[], contact:{name:"" , email:"" , phone:""}}, action) {
    switch (action.type) {
        case types.FETCH_CONTACTS:
            return {...state , contacts: action.data}; 
        case types.GET_CONTACT:
            return {...state , contact: action.data}; 

      default:
        return state;
    }
  }

  