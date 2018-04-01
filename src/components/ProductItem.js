import React, { Component } from 'react';
import { connect }			from 'react-redux';

import Validate				from '../libs/validate';
import { AcChangeNotify }	from '../actions/index';
import * as configs			from '../constants/Config';

class ProductItem extends Component {

	constructor(props) {
		super(props);

		this.state = {
			qty: 1
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

		if(Validate.checkQty(qty) === false) {
			this.props.updateNotify(configs.NOTI_GREATER_THAN_ONE);
		} else {
			this.props.updateNotify(configs.NOTI_ACT_ADD);
		}

		/*this.setState({
			qty: 1
		});*/
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
		          		<a href="javascript:void(0);" onClick={() => this.handleClick(product)} className="price"> {product.price} USD </a>
		          	</p>
		}

		return xhtml;
	}

}

var mapDispatchToProps = (dispatch) => {
	return {
		updateNotify: (message) => {
			dispatch(AcChangeNotify(message));
		}
	}
}

export default connect(null, mapDispatchToProps)(ProductItem);