import React, { Component } from 'react';
import BitcoinService from '../../services/BitcoinService'
import Chart from '../../components/chart/chart'

class StatisticPage extends Component {

state = {marketPrice:[] , confirmTransactions:[]}

    async componentDidMount() {
        const marketPrice = await BitcoinService.getMarketPrice()
        this.setState({marketPrice})
        const confirmTransactions = await BitcoinService.getConfirmedTransactions(1);
        this.setState({ confirmTransactions })

    }
    
    render() {

        const { marketPrice , confirmTransactions} = this.state
        return (
            <div className="statistic-page">
            <h1>Market Price (USD)</h1>
            <Chart data={marketPrice} color={'blue'} ></Chart>
            <h1> Confirm Transactions Per Day</h1>
            <Chart data={confirmTransactions} color={'red'} ></Chart>

           
            </div>
        )

    }
}

export default StatisticPage;