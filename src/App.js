import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color: rgb(20, 56, 97);
  color: #cccccc;
`;

const COIN_COUNT = 10;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      /*
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 9999.99,
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32.0,
        price: 299.99,
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 0,
        price: 1.0,
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 1000,
        price: 0.2,
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0,
        price: 298.99,
      },
      */
    ],
  };
  componentDidMount = () => {
    axios.get('https://api.coinpaprika.com/v1/coins').then(response => {
      let coinData = response.data.slice(0, COIN_COUNT).map(function (coin) {
        return {
          key: coin.id,
          name: coin.name,
          ticker: coin.symbol,
          balance: '-',
          price: '-',
        };
      });
      console.log('Setting the state...');
      this.setState({ coinData });
      console.log('Done setting the state');
    });
    console.log('ComponentDidMount is DONE');
    debugger;
  };

  handleBalanceVisibilityChange = () => {
    this.setState(function (oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance,
      };
    });
  };
  handleRefresh = valueChangeTicker => {
    const newCoinData = this.state.coinData.map(function (values) {
      let newValues = { ...values };
      if (valueChangeTicker === values.ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });

    this.setState({ coinData: newCoinData });
  };
  render() {
    return (
      <Div className='App'>
        <ExchangeHeader />
        <AccountBalance
          amount={this.state.balance}
          showBalance={this.state.showBalance}
          handleBalanceVisibilityChange={this.handleBalanceVisibilityChange}
        />
        <CoinList
          coinData={this.state.coinData}
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh}
        />
      </Div>
    );
  }
}

export default App;
