import React, { Component } from 'react';

import { connect } from 'react-redux';
import { signup } from '../../store/actions/userAction';
class SignupPage extends Component {

state={name:''}

handleTxt=(event)=>{
const name = event.target.value
this.setState({name})
}

   signup =  async (event)=>{
        event.preventDefault();
        const { dispatch } = this.props
       await dispatch(signup(this.state.name)) 
        const {history} = this.props;
        history.push(`/`);
      }

    render() {

        return (
            <div className="signup">
                <form onSubmit={this.signup}>
           <h1>signup</h1>
           <input  type="text" placeholder="Your Name"  onChange={this.handleTxt} />
                     <button>signup</button>
                </form>
            </div>
        )

    }
}

  const mapStateToProps = ({userReducer}) => {
    const { user } = userReducer;

    return {
      user
    }
  }
  export default connect(mapStateToProps) (SignupPage);

