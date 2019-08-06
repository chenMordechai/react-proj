import types from "../types";
import UserService from "../../services/UserService";



export const fetchData = (data) => {
    return {
      type: types.GET_USER,
      data
    }
  };

  //get user
  export const getUser = () => {
    return (dispatch) => {
     const response = UserService.getUser()
          dispatch(fetchData(response))
    };
  };
  //signup
  export const signup = (name) => {
    return (dispatch) => {
     const response = UserService.signup(name)
          dispatch(fetchData(response))
       
        
    };
  };