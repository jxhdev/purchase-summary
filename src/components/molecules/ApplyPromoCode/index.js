import React, { Component } from 'react';
import s from './index.module.css';

class ApplyPromoCode extends Component {
  state = { code: '' };

  handleInputChange = e => {
    this.setState({
      code: e.target.value
    });
  };

  onSubmit = (e, code) => {
    e.preventDefault();
    this.props.applyDiscount(e, code);
    this.setState({ code: '' });
  };

  render() {
    return (
      <div className={s.wrapper}>
        <h2 className={s.title}>Promo Code</h2>
        <form onSubmit={e => this.onSubmit(e, this.state.code)}>
          <input
            className={s.input}
            id="form"
            value={this.state.code}
            onChange={this.handleInputChange}
          />
          <button className={s.button}>Apply</button>
        </form>
      </div>
    );
  }
}

export default ApplyPromoCode;
