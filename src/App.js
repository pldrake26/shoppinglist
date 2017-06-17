import React, { Component } from 'react';
import './App.css';
import ShoppingList from './ShoppingList.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="col-sm-6">
            <ShoppingList />
        </div>
        <div className="col-sm-6">

        </div>
      </div>
    );
  }
}

export default App;
