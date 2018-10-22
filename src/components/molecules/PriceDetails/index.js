import React, { Component } from 'react';
import { LineItem, LineItemWithTooltip } from '../../molecules';
import s from './index.module.css';

const pickupText = `Picking up your order in the store helps cut costs, and we pass the
        savings on to you.`;
class PriceDetails extends Component {
  state = {};
  render() {
    const { subtotal, savings, fees, location } = this.props.details;
    return (
      <div className={s.priceDetails}>
        <LineItem title="Subtotal" price={subtotal} />
        <LineItemWithTooltip
          title="Pickup Savings"
          tooltipContent={pickupText}
          price={savings}
          decrement
        />
        <LineItem
          title="Est. taxes & fees"
          altTitle={`(Based on ${location})`}
          price={fees}
        />
        <hr />
        <LineItem large title="Est. total" price={subtotal + fees + savings} />
      </div>
    );
  }
}

export default PriceDetails;
