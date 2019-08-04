import React, { Component } from 'react';
import ContactService from '../../services/ContactService'
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'

class ContactDetailsPage extends Component {
    state = { contact: {} }

    async componentDidMount() {
        const contact = await ContactService.getContactById(this.props.match.params.id);
        this.setState({ contact })
      }

    render() {
        const { contact } = this.state;

        return (
            <div className="contact-details">
            <h1>details</h1>
            {
               contact && <section>
                    <h1>{contact.name}</h1>
                    <h1>{contact.phone}</h1>
                    <h1>{contact.email}</h1>

                    <Link to="/contact">Back </Link>|
                    <Link to={`/contact/edit/${contact._id}`}> Edit</Link>

                    {/* <button onClick={this.onClose}>Back</button> */}
                </section>

            }
            </div>
        )

    }
}

export default ContactDetailsPage;