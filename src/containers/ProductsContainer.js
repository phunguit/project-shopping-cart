import React, { Component } from 'react';
import { connect }			from 'react-redux';
import ProductList 			from '../components/ProductList';
import ProductItem 			from '../components/ProductItem';
import * as configs			from '../constants/Config';

class ProductContainer extends Component {

	render() {
		var products = this.props.items;
		return (
			<ProductList>{this.showProductList(products)}</ProductList>
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

const mapStateToProps = (state) => {
	return {
		items: state.products
	}
}

export default connect(mapStateToProps, null)(ProductContainer);