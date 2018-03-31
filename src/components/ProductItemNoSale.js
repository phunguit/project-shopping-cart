import React, { Component } from 'react';

class ProductItemNoSale extends Component {

	render() {
		var { product } = this.props;

		return (
			<div className="media product">
		        <div className="media-left">
		          <a>
		            <img className="media-object" src={`images/${product.image}`} alt="charmander" />
		          </a>
		        </div>
		        <div className="media-body">
		          <h4 className="media-heading">{product.name}</h4>
		          <p>{product.description}</p>
		          <span className="price"> {product.price} USD</span>
		        </div>
	      	</div>
		);
	}

}

export default ProductItemNoSale;