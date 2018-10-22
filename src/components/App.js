import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';

import { PurchaseSummaryContainer } from '../containers';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PurchaseSummaryContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
