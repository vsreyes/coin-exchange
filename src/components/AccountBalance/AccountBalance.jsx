import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
  border: 1px solid red;
`;

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