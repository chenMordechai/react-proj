import React, { Component } from 'react';

import ContactPreview from '../ContactPreview/ContactPreview'


class ContactList extends Component {
   
  render() {

    
    return (
        <div className="contact-list">
               {
                this.props.contacts.map(contact =>
                    <ContactPreview  key={contact._id} contact={contact} contactSelected={this.props.contactSelected}></ContactPreview>
                )
               }
            
        </div>
        )
  }
}

export default ContactList;