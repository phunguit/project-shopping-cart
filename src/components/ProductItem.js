import React, { Component } from 'react';

class ProductItem extends Component {

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
		          {this.showPrice(product)}
		        </div>
	      	</div>
		);
	}

	showPrice(product) {
		var xhtml = <span className="price"> {product.price} USD</span>
		if(product.canBuy) {
			xhtml = <p>
						<input name="quantity-product-1" type="number" defaultValue={1} min={1} />
		          		<a data-product={1} className="price"> {product.price} USD </a>
		          	</p>
		}

		return xhtml;
	}

}

export default ProductItem;