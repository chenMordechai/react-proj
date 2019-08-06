import { combineReducers } from 'redux';
import contactReducer from './contactReducer'
import userReducer from './userReducer'
import bitcoinReducer from './bitcoinReducer'

const combinedReducer = combineReducers({
    contactReducer,
    userReducer,
    bitcoinReducer
  })
  
  export default combinedReducer
  