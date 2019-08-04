import React, { Component } from 'react';
import BitcoinService from '../../services/BitcoinService'
import UserService from '../../services/UserService'
import './HomePage.scss'

class HomePage extends Component {

    state = {rate : null, user: {} }

    async componentDidMount() {
        const rate = await BitcoinService.getRate(1);
        this.setState({ rate })
  
        const user = await UserService.getUser()
        this.setState({user})
    }
    render() {
        const { rate , user } = this.state;

        return (
            <div className="home-page">
            <h2>Hello {user.name}!</h2>
            <h2>Coins: {user.coins}</h2>
            <h2>BTC: {rate}</h2>
           
            </div>
        )

    }
}

export default HomePage;