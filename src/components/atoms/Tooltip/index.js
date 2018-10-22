import React, { Component } from 'react';
import s from './index.module.css';

class Tooltip extends Component {
  render() {
    const { tooltipContent } = this.props;
    return <div className={s.tooltip}>{tooltipContent}</div>;
  }
}

export default Tooltip;
