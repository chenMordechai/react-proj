import React, { Component } from 'react';
import ContactList from '../../components/ContactList/ContactList'
import ContactService from '../../services/ContactService'
import ContactFilter from '../../components/ContactFilter/ContactFiltar'
import './ContactPage.scss'
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'




class ContactPage extends Component {

    state = { contacts: [] }

    async componentDidMount() {
        const contacts = await ContactService.getContacts();
        this.setState({ contacts })
      }
      contactSelected = (selectedContact)=> {
      const {history} = this.props;
      history.push(`/contact/${selectedContact._id}`);
    }    
    contactSearch = async (event) => {
        const filterTerm = event.target.value;
        const searchRes = await ContactService.getContacts({ term: filterTerm });
        this.setState({ contacts: searchRes });
      }

    render() {
        const { contacts} = this.state;


        return (
            <div className="contact-page">
            <ContactFilter onFilter={this.contactSearch} ></ContactFilter>
            <Link to="/contact/edit">Add Contact</Link>
            
            <ContactList contacts={contacts} contactSelected={this.contactSelected}></ContactList>
                        

            </div>
        )

    }
}

export default ContactPage;