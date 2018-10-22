import React, { Component } from 'react';
import s from './index.module.css';

class ToggleDropdown extends Component {
  state = { toggled: false };
  onClickHandler() {
    this.setState(prevState => ({ toggled: !prevState.toggled }));
  }
  render() {
    const { title } = this.props;
    return (
      <div className={s.toggleDropdown}>
        <div className={s.toggleDropdown__container}>
          <p
            id="test_click"
            className={s.toggleDropdown__title}
            tabIndex="1"
            onClick={() => this.onClickHandler()}
          >
            {this.state.toggled
              ? `Hide ${title
                  .split(' ')
                  .slice(1)
                  .join(' ')}`
              : title}
          </p>
          <p className={s.toggleDropdown__icon}>
            &nbsp;
            {this.state.toggled ? '–' : '+'}
          </p>

          {this.state.toggled && this.props.children}
        </div>
      </div>
    );
  }
}

export default ToggleDropdown;
