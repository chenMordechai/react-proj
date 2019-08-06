import React, { Component } from 'react';
import ContactFilter from '../ContactFilter/ContactFiltar'
import ContactPreview from '../ContactPreview/ContactPreview'
import { connect } from 'react-redux';
import { fetchContactsData } from '../../store/actions/contactActions';

class ContactList extends Component {
  async componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchContactsData()) 
    }
  render() {

    return (
        <div className="contact-list">
                    <ContactFilter ></ContactFilter>
               {
                this.props.contacts.map(contact =>
                    <ContactPreview  key={contact._id} contact={contact} contactSelected={this.props.contactSelected}></ContactPreview>
                )
               }
            
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

export default connect(mapStateToProps)(ContactList)