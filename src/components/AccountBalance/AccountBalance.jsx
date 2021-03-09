import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AccountBalance';

export default class AccountBalance extends Component {
  render() {
    return (
      <section>
        $ {this.props.amount}
      </section>
    );
  }
}


AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired
}