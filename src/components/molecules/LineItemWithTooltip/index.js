import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  text-align: left;
  display: block;
  padding: 0;
`;

const P = styled.p`
  font-size: ${props => (props.large ? '2rem' : '1.4rem')}
  display: inline;
  padding: 0.3rem;
  width: 100%;
  margin: 0rem;
  text-decoration: underline;
  span {
    float: right;
    text-decoration: strong;
    color: ${props => (props.decrement ? 'red' : 'black')};
  }
`;

class LineItemWithTooltip extends Component {
  state = { hovered: false };

  onMouseEnterHandler() {
    this.setState({ hovered: true });
    console.log('wtf');
  }
  onMouseLeaveHandler() {
    this.setState({ hovered: false });
  }

  render() {
    const { title, price, decrement } = this.props;
    return (
      <Wrapper>
        <P
          decrement={decrement}
          onMouseEnter={() => this.onMouseEnterHandler()}
          onMouseLeave={() => this.onMouseLeaveHandler()}
        >
          {title}
          <span>
            {decrement ? (
              <b>
                -$
                {-1 * price}
              </b>
            ) : (
              <b>${price}</b>
            )}
          </span>
        </P>
      </Wrapper>
    );
  }
}

export default LineItemWithTooltip;
