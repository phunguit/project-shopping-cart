import React, { Component } from 'react';
import { connect }			from 'react-redux';

import ProductItem 			from './ProductItem';
import ProductItemNoSale 	from './ProductItemNoSale';
import * as configs			from '../constants/Config'

class ProductList extends Component {

	render() {
		var { products } = this.props;
		return (
			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
			  <div className="panel panel-primary"> 
			    <div className="panel-heading"><h1 className="panel-title">List Products</h1></div> 
			    <div className="panel-body" id="list-product">
			    	{this.showProductList(products)}
			    </div>
			  </div>
			</div>	
		);	
	}

	showProductList(products) {
		var eleProductList = configs.CARTS_EMPTY;

		if(products.length !== 0) {
			eleProductList = products.map((product, index) => {
				return (
					<ProductItem key={index} product={product} />
				);
			});
		}
		return eleProductList;
	}

}

const mapStateToProps = state => {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps, null)(ProductList);