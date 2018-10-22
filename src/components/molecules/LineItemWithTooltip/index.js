import React, { Component } from 'react';
import { Tooltip } from '../../atoms';
import s from './index.module.css';

class LineItemWithTooltip extends Component {
  state = { tooltipVisible: false };

  onClickHandler() {
    if (!this.state.tooltipVisible) {
      document.addEventListener(
        'click',
        e => this.outsideClickHandler(e),
        false
      );
    } else {
      document.removeEventListener(
        'click',
        e => this.outsideClickHandler(e),
        false
      );
    }
    this.setState(prevState => ({ tooltipVisible: !prevState.tooltipVisible }));
  }
  outsideClickHandler(e) {
    if (this.node && this.node.contains(e.target)) {
      return;
    }
    this.setState({ tooltipVisible: false });
  }

  render() {
    const { title, price, decrement, tooltipContent } = this.props;

    return (
      <div
        className={s.wrapper}
        ref={node => {
          this.node = node;
        }}
      >
        <p
          id="test_click"
          className={s.title}
          tabIndex="0"
          onClick={() => this.onClickHandler()}
        >
          {title}
        </p>
        {decrement ? (
          <p className={s.price}>
            <span className={s.decrement}>
              <b>
                -$
                {(price * -1).toFixed(2)}
              </b>
            </span>
          </p>
        ) : (
          <p className={s.price}>
            <span>
              <b>${price.toFixed(2)}</b>
            </span>
          </p>
        )}
        {this.state.tooltipVisible && (
          <Tooltip tooltipContent={tooltipContent} />
        )}
      </div>
    );
  }
}

export default LineItemWithTooltip;
