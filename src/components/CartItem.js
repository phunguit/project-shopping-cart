import React, { Component } from 'react';

class CartItem extends Component {

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

	render() {
		
		var { item, qty } = this.props.cartItem;
		qty = this.state.qty > 0 ? this.state.qty : qty;

		return (
			<tr>
	            <th scope="row">1</th>
	            <td>{ item.name }</td>
	            <td>{item.price} USD</td>
	            <td><input onChange={this.handleChange} name="qty" type="number" value={ qty } min={1} /></td>
	            <td>{this.getSubTotal(item.price, qty)}</td>
	            <td>
	              <a className="label label-info update-cart-item" data-product>Update</a>
	              <a className="label label-danger delete-cart-item" data-product>Delete</a>
	            </td>
	        </tr>
		);
	}

	getSubTotal(price, qty) {
		return <strong>{ price*qty } USD</strong>
	}

}

export default CartItem;