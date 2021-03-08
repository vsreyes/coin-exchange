import React, { Component } from 'react'
import './Coin.css';

export default class Coin extends Component {
  render() {
    return(
      <tr className="coin-row">
        <td>{this.prop.name}</td>
        <td>{this.prop.ticker}</td>
        <td>{this.prop.price}</td>
      </tr>
      );
    }
}

