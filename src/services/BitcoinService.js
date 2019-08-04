const axios = require('axios')

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}


async function getRate(coins) {
    try {
        const rates = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        return rates.data
    } catch (err) {
        console.log('got eror', err)
    }
}


async function getMarketPrice() {
    try {
        const res = await axios.get('https://api.blockchain.info/charts/market-price?format=json&cors=true')
     return res.data.values.map(point => point.y);
    } catch (err) {
        console.log('got eror', err)
    }
}

async function getConfirmedTransactions() {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/n-transactions?format=json&cors=true`);
        return res.data.values.map(point => point.y);
    } catch (err) {
        console.log('got eror', err)
    }
}