import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PurchaseSummary } from '../../components/organisms';

class PurchaseSummaryContainer extends Component {
  state = {};
  render() {
    return <PurchaseSummary purchaseSummary={this.props.purchaseSummary} />;
  }
}

function mapStateToProps(state) {
  return {
    purchaseSummary: state.purchaseSummary
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseSummaryContainer);
