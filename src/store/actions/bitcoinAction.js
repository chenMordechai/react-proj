import types from "../types";
import BitcoinService from "../../services/BitcoinService";


export const fetchData = (data, type) => {
    return {
      type:type ,
      data
    }
  };

  //get rate 
  export const getRate = (num) => {
    return (dispatch, getState) => {
      return  BitcoinService.getRate(num)
        .then(response => {
          dispatch(fetchData(response,types.GET_RATE))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  export const getMarketPrices = () => {
    return (dispatch) => {
      return  BitcoinService.getMarketPrice()
        .then(response => {
          dispatch(fetchData(response, types.GET_STATICS1))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  export const getConfirmedTransactions = () => {
    return (dispatch) => {
      return  BitcoinService.getConfirmedTransactions()
        .then(response => {
          dispatch(fetchData(response, types.GET_STATICS2))
        })
        .catch(error => {
          throw(error);
        });
    };
  };



