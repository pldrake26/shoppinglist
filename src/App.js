import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import ShoppingList from './ShoppingList.js';
import PrintList from './PrintList.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="col-sm-6">
            <Router>
                <div>
                    <Link to="/"><button type="button" className="btn btn-default"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>&nbsp;&nbsp;Shopping List</button></Link>&nbsp;&nbsp;
                    <Link to="/print"><button type="button" className="btn btn-default"><span className="glyphicon glyphicon-print" aria-hidden="true"></span>&nbsp;&nbsp;Print</button></Link>
                    <Route exact path="/" component={ShoppingList} />
                    <Route path="/print" component={PrintList} />
                </div>
            </Router>
        </div>
        <div className="col-sm-6">

        </div>
      </div>
    );
  }
}

export default App;
