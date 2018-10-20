import React, { Component } from 'react';
import { PriceDetails } from '../../molecules';
import styled from 'styled-components';

const StyledPurchaseSummary = styled.div`
  display: flex;
  justify-content: center;
  width: 18rem;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 2px 0px lightgray;
  border-radius: 0.5rem;

  hr {
    border: 0;
    height: 0;
    box-shadow: 0 0 0.4px 0.2px black;
  }
`;
class PurchaseSummary extends Component {
  state = {};
  render() {
    const details = { subtotal: 500, savings: -10, fees: 49, total: 539 };
    return (
      <StyledPurchaseSummary>
        <PriceDetails details={details} />
      </StyledPurchaseSummary>
    );
  }
}

export default PurchaseSummary;
