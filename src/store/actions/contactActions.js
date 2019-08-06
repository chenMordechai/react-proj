import types from "../types";
import ContactService from "../../services/ContactService";


export const fetchData = (data) => {
    return {
      type: types.FETCH_CONTACTS,
      data
    }
  };
  
  //for asinc
  //get contacts 
  export const fetchContactsData = (filterBy) => {
    return (dispatch) => {
      return  ContactService.getContacts(filterBy)
        .then(response => {
          dispatch(fetchData(response))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

//get contact by id
  export const getContact = (contactId) => {
    return (dispatch) => {
      return  ContactService.getContactById(contactId)
        .then(response => {
          dispatch(fetchData2(response))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export const fetchData2 = (data) => {
    return {
      type: types.GET_CONTACT,
      data
    }
  };

  //delete
  export const deleteContact = (contactId) => {
    return (dispatch) => {
      return  ContactService.deleteContact(contactId)
        .then(response => {
          dispatch(fetchData(response))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  //save
  export const saveContact = (contact) => {
    return (dispatch) => {
      return  ContactService.saveContact(contact)
        .then(response => {
          dispatch(fetchData2(response))
        })
        .catch(error => {
          throw(error);
        });
    };
  };