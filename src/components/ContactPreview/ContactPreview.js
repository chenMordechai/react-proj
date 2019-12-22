import React, { Component } from 'react';

import './ContactPreview.scss'


class ContactPreview extends Component {
    render() {
       
        return (
              <section className="contact-preview" onClick={this.props.contactSelected.bind(this, this.props.contact)}>
               <img src={`https://robohash.org/${this.props.contact.name}?set=set5`} alt=""></img>
               {this.props.contact.name} 
              </section>
            )
      }
}

export default ContactPreview;