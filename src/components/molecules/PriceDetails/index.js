import React, { Component } from 'react';
import { LineItem } from '../../atoms';
import { LineItemWithTooltip } from '../../molecules';
import styled from 'styled-components';

const StyledPriceDetails = styled.div`
  width: 100%;
  margin: 1rem;
`;

const pickupText = `Picking up your order in the store helps cut costs, and we pass the
        savings on to you.`;

class PriceDetails extends Component {
  state = {};
  render() {
    const { subtotal, savings, fees, total } = this.props.details;
    return (
      <StyledPriceDetails>
        <LineItem title="Subtotal" price={subtotal} />
        <LineItemWithTooltip
          title="Pickup Savings"
          content={pickupText}
          price={savings}
          decrement
        />
        <LineItem title="Est. taxes & fees" price={fees} />
        <hr />
        <LineItem large title="Est. total" price={total} />
      </StyledPriceDetails>
    );
  }
}

export default PriceDetails;
