import React, { Component } from 'react';
import Validate				from '../libs/validate';

class ProductItem extends Component {

	constructor(props) {
		super(props);

		this.state = {
			qty: 0
		}
	}

	handleChange = (e) => {
		var target	= e.target;
		var name 	= target.name;
		var value	= target.value;

		this.setState({
			[name]: value
		})
	}

	handleClick = (product) => {
		var qty = this.state.qty;
		
		console.log(product);

		if(Validate.checkQty(qty) === false) {
			console.log('Invalid');
		} else {
			console.log('Valid');
		}

	}

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
						<input name="qty" onChange={this.handleChange} type="number" value={this.state.qty} min={1} />
		          		<a href='' onClick={this.handleClick(product)} className="price"> {product.price} USD </a>
		          	</p>
		}

		return xhtml;
	}

}

export default ProductItem;