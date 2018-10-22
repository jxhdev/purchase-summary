import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApplyPromoCode } from '../../components/molecules';
import { applyDiscount } from '../../store/actions/purchaseSummary';

class ApplyPromoCodeContainer extends Component {
  state = {};
  render() {
    return (
      <ApplyPromoCode
        onChange={this.props.changeCode}
        applyDiscount={this.props.applyDiscount}
        code={this.props.code}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    applyDiscount: (e, code) => {
      e.preventDefault();

      if (code === 'discount') {
        dispatch(applyDiscount(0.1));
      }
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ApplyPromoCodeContainer);
