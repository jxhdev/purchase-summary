import React, { Component } from 'react';
import styled from 'styled-components';

const StyledItemDetails = styled.div`
  color: pink;
`;

class ItemDetails extends Component {
  render() {
    return (
      <StyledItemDetails>
        <h1>Hello world!</h1>
      </StyledItemDetails>
    );
  }
}

export default ItemDetails;
