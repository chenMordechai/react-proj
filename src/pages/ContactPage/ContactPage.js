import React, { Component } from 'react';
import ContactList from '../../components/ContactList/ContactList'
import './ContactPage.scss'
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'


class ContactPage extends Component {

    contactSelected = (selectedContact)=> {
      const {history} = this.props;
      history.push(`/contact/${selectedContact._id}`);
    }    

    render() {
        return (
            <div className="contact-page">
            <Link to="/contact/edit">Add Contact</Link>
            <ContactList contactSelected={this.contactSelected} ></ContactList>
            </div>
        )
    }
}

export default ContactPage