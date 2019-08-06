import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContactsData } from '../../store/actions/contactActions';

import './ContactFilter.scss'

class ContactFilter extends Component {

    onFilter = async (event) => {
        const filterTerm = event.target.value;
        const { dispatch } = this.props
        dispatch(fetchContactsData({ term: filterTerm })) 
      }
    render(){
       return (
        <div className="filter">
            <input  type="text" placeholder="Search" onInput={this.onFilter} />
        </div>
        )
      }
}

const mapStateToProps = ({contactReducer}) => {
    const { contacts } = contactReducer;
  
    return {
      contacts
    }
  }
  
  export default connect(mapStateToProps)(ContactFilter)