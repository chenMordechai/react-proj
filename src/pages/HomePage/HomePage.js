import React, { Component } from 'react';
import './HomePage.scss'


import { connect } from 'react-redux';
import { getRate } from '../../store/actions/bitcoinAction';
import { getUser } from '../../store/actions/userAction';

class HomePage extends Component {
    async componentDidMount() {
        const { dispatch } = this.props
        await dispatch(getUser())
        if(this.props.user === null) {
            const {history} = this.props;
            history.push(`/signup`);
        }
        else{
            if(!this.props.rate){
                dispatch(getRate(this.props.user.coins))
            }
        }

        // const rate = await BitcoinService.getRate(1);
        // this.setState({ rate })
        // const user = await UserService.getUser()
        // this.setState({user})
    }
    render() {
        const { rate , user  } = this.props;

        return (
        user &&
            <div className="home-page">
                <div className="content">
            <h2>Hello {user.name}!</h2>
            <h2>Coins: {user.coins}</h2>
            <h2>BTC: {rate}</h2>
                </div>
           
            </div>
        )

    }
}

const mapStateToProps = ({bitcoinReducer,userReducer}) => {
    const { rate } = bitcoinReducer;
    const { user } = userReducer;

  
    return {
      rate,
      user
    }
  }
  export default connect(mapStateToProps) (HomePage);

