import React, { Component }   from 'react';
import '../App.css';
import Title 				           from './Title';
import Cart 				          from './Cart';
import ProductsContainer       from '../containers/ProductsContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
      	<Title />

      	<div className="row">
			<ProductsContainer />
			<Cart />
		</div>
      </div>
    );
  }
}

export default App;
