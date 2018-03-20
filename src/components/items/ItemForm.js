import React, { Component } from 'react';
import { connect }			from 'react-redux';
import { AcAddToCart }		from '../../actions/index';

class ItemForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1,
			price: this.props.price
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		var name 	= e.target.name;
		var value 	= e.target.value;

		this.setState({
			[name]: +value
		});
	}

	handleClick = (e) => {
		e.preventDefault();
		var oldQuantity = 0;

		if(this.props.item.quantity !== undefined) {
			oldQuantity = this.props.item.quantity;
		}
		
		/*var quantity = this.state.quantity + oldQuantity;
		if(this.state.quantity < oldQuantity) {

		}*/

		this.props.item.quantity = this.state.quantity + oldQuantity;
		this.props.addToCart(this.props.item);
	}

	render() {
		var { price, inventory } = this.props;

		var elePrice 	= <a onClick={this.handleClick} data-product={1} href="" className="price"> {this.state.price} USD </a>;
		var eleQuantity =  <input name='quantity' type="number" onChange={this.handleChange} value={this.state.quantity} min={1} />;
		if(!inventory) {
			elePrice 	= <span className="price"> {price} USD</span>;
			eleQuantity = null;
		}

		return (
			<form>
            	{ eleQuantity }
            	{ elePrice }
            </form>
		)
	}

}

const mapDispatchToProps = (dispatch) => {

	return {
		addToCart: (item) => {
			dispatch(AcAddToCart(item));
		}

	}
}

export default connect(null, mapDispatchToProps)(ItemForm);