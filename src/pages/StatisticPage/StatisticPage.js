import React, { Component } from 'react';
import Chart from '../../components/chart/chart'

import { connect } from 'react-redux';
import { getConfirmedTransactions, getMarketPrices } from '../../store/actions/bitcoinAction';

class StatisticPage extends Component {

// state = {marketPrice:[] , confirmTransactions:[]}

    componentDidMount  () {
        this.getMarketPrices();
        this.getConfirmedTransactions();
    }
    getConfirmedTransactions(){
        const { dispatch } = this.props
        dispatch(getConfirmedTransactions()) 
        // const confirmTransactions = await BitcoinService.getConfirmedTransactions(1);
        // this.setState({ confirmTransactions })

    }
    getMarketPrices(){
        const { dispatch } = this.props
        dispatch(getMarketPrices()) 
        // const marketPrice = await BitcoinService.getMarketPrice()
        // this.setState({marketPrice})
    }
    
    render() {

        const { marketPrice , confirmTransactions} = this.props
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

const mapStateToProps = ({bitcoinReducer}) => {
    const { marketPrice , confirmTransactions} = bitcoinReducer;
  
    return {
        marketPrice,
        confirmTransactions
    }
  }
  export default connect(mapStateToProps) (StatisticPage);

