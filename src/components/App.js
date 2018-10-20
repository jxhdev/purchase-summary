import React, { Component } from 'react';
import { ItemDetails, ApplyPromoCode } from './atoms';
import { PurchaseSummary } from './organisms';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PurchaseSummary />
      </div>
    );
  }
}

export default App;
