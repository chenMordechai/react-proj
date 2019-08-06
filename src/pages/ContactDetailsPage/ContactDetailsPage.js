import React, { Component } from 'react';
import ContactService from '../../services/ContactService'
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'

import { connect } from 'react-redux';
import { getContact } from '../../store/actions/contactActions';

class ContactDetailsPage extends Component {
    // state = { contact: {} }

    async componentDidMount() {
        const { dispatch } = this.props
        dispatch(getContact(this.props.match.params.id)) 
        // const contact = await ContactService.getContactById(this.props.match.params.id);
        // this.setState({ contact })
      }

    render() {
        const { contact } = this.props;

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
const mapStateToProps = ({contactReducer}) => {
    const { contact } = contactReducer;
  
    return {
      contact
    }
  }
  export default connect(mapStateToProps) (ContactDetailsPage);
