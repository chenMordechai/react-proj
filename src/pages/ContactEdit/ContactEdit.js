import React, { Component } from 'react';
import ContactService from '../../services/ContactService'
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'

import { connect } from 'react-redux';
import { getContact , deleteContact ,saveContact } from '../../store/actions/contactActions';

class ContactEdit extends Component {
    state = { contact: {name:"" , email:"" , phone:""} }

    async componentDidMount() {
        if (!this.props.match.params.id) return;
        const { dispatch } = this.props
        dispatch(getContact(this.props.match.params.id)) 
        // const contact = await ContactService.getContactById(this.props.match.params.id);
        this.setState({contact:this.props.contact})
      }

      whenInput =(event)=>{
        const {value , name} = event.target;
        this.setState((state)=>{return {contact:{...state.contact , [name]:value }}})

      }
      save = (event)=>{
        event.preventDefault();
        const { dispatch } = this.props
        dispatch(saveContact(this.state.contact)) 
        // ContactService.saveContact(this.state.contact)
        const {history} = this.props;
        history.push(`/contact`);
      }
      deleteContact = () =>{
        const { dispatch } = this.props
        dispatch(deleteContact(this.props.match.params.id)) 
        // ContactService.deleteContact(this.state.contact._id)
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
                    <Link to={`/contact/`}>Back</Link>
                    </form>

                    <button onClick={this.deleteContact}>Delete</button>
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
export default connect(mapStateToProps) (ContactEdit);

