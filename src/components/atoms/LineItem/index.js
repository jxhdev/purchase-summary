import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const StyledLineItem = styled.div`
  font-size: ${props => (props.large ? '2rem' : '1.4rem')}
  text-align: left;
  margin: 0rem;
  width: 100%;

  span {
    float: right;
    text-decoration: strong;
    color: ${props => (props.decrement ? 'red' : 'black')}
  }
  p {
    padding: 0.3rem;
  }
`;

const P = styled.p`
  font-size: ${props => (props.large ? '2rem' : '1.4rem')}
  text-align: left;
  display: inline-block;
  padding: 0.3rem;
  width: 100%;
  margin: 0rem;
  span {
    padding-right: 0.3rem;
    float: right;
    text-decoration: strong;
    color: ${props => (props.decrement ? 'red' : 'black')};
  }
`;

const LineItem = props => {
  const { title, price, large, decrement } = props;
  return (
    <P>
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
  );
};

export default LineItem;
