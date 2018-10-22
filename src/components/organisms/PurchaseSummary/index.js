import React, { Component } from 'react';
import { PriceDetails, ToggleDropdown, ItemDetails } from '../../molecules';
import { ApplyPromoCodeContainer } from '../../../containers';
import styles from './index.module.css';

class PurchaseSummary extends Component {
  state = {};
  render() {
    const { cart } = this.props.purchaseSummary;
    return (
      <div className={styles.wrapper}>
        <PriceDetails details={this.props.purchaseSummary} />
        <ToggleDropdown title="See item details">
          <ItemDetails cart={cart} />
        </ToggleDropdown>
        <ToggleDropdown title="Apply promo code">
          <ApplyPromoCodeContainer />
        </ToggleDropdown>
      </div>
    );
  }
}

export default PurchaseSummary;
