import React, { Component } from 'react';
import ContactService from '../../services/ContactService'
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'


class ContactEdit extends Component {
    state = { contact: {name:"" , email:"" , phone:""} }

    async componentDidMount() {
        if (!this.props.match.params.id) return;
        const contact = await ContactService.getContactById(this.props.match.params.id);
        this.setState({ contact })
        
      }

      whenInput =(event)=>{
        const {value , name} = event.target;
        this.setState((state)=>{return {contact:{...state.contact , [name]:value }}})

      }
      save = (event)=>{
        event.preventDefault();
        ContactService.saveContact(this.state.contact)
        const {history} = this.props;
        history.push(`/contact`);
      }
      deleteContact = () =>{
        ContactService.deleteContact(this.state.contact._id)
        const {history} = this.props;
        history.push(`/contact`);
      }
    render() {
       const {contact} = this.state
        return (
            <div className="contact-edit">
            <h1>Edit</h1>  
            <form onSubmit={this.save}>

                    <h1>Name:</h1>
                    <input type="text" value={contact.name} name="name" onChange={this.whenInput}/>
                    <h1>Phone:</h1>
                    <input type="text" value={contact.phone} name="phone" onChange={this.whenInput}/>
                    <h1>Email:</h1>
                    <input type="text" value={contact.email} name="email" onChange={this.whenInput}/>
                    <button>Save</button>
                    <Link to={`/contact/${contact._id}`}>Back</Link>
                    </form>

                    <button onClick={this.deleteContact}>Delete</button>
            </div>
            )
      }
}

export default ContactEdit;

