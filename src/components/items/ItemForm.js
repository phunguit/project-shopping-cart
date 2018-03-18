import React, { Component } from 'react';

class ItemForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1,
			price: this.props.price
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}

	handleChange = (e) => {
		var name 	= e.target.name;
		var value 	= e.target.value;

		this.setState({
			[name]: +value
		});
	}

	handleClick = (e) => {
		console.log(this.state);
		e.preventDefault();
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

export default ItemForm;