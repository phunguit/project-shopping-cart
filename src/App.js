import React, { Component } from 'react';
import './App.css';
import Header       from './components/Header';
import ItemList     from './components/items/ItemList';
import CartList     from './components/cart/CartList';

class App extends Component {
  render() {
    return (
      <div className="container">        
        <Header />
        <div className="row">
          <ItemList />
          <CartList />
        </div>
      </div>
    );
  }
}

export default App;
