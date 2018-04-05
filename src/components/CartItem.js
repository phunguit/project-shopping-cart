import React, { Component } from 'react';
import { connect }			from 'react-redux';

import { AcRemoveProduct, AcChangeNotify, AcUpdateProduct }	from '../actions/index';
import * as configs			from '../constants/Config';

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

	handleDelete = (item) => {
		this.props.deleteItem(item);
		this.props.changeNotify(configs.NOTI_ACT_DELETE);
	}

	handleUpdate = (item, qty) => {
		this.props.updateItem(item, qty);
		this.props.changeNotify(configs.NOTI_ACT_UPDATE);
	}

	render() {
		var { item, qty } 	= this.props.cartItem;
		var { index	}		= this.props;
		qty = this.state.qty > 0 ? this.state.qty : qty;

		return (
			<tr>
	            <th scope="row">{ index }</th>
	            <td>{ item.name }</td>
	            <td>{item.price} USD</td>
	            <td><input onChange={this.handleChange} name="qty" type="number" value={ qty } min={1} /></td>
	            <td>{this.getSubTotal(item.price, qty)}</td>
	            <td>
	              <a href="javascript:void(0);" onClick={() => this.handleUpdate(item, qty)} className="label label-info update-cart-item" data-product>Update</a>
	              <a href="javascript:void(0);" onClick={() => this.handleDelete(item)} className="label label-danger delete-cart-item">Delete</a>
	            </td>
	        </tr>
		);
	}

	getSubTotal(price, qty) {
		return <strong>{ price*qty } USD</strong>
	}

}

var mapStateToProps = (state) => {

	return {
		test: state.carts
	}
}

var mapDispatchToProps = (dispatch) => {
	return {
		deleteItem: item => {
			dispatch(AcRemoveProduct(item));
		},
		changeNotify: message => {
			dispatch(AcChangeNotify(message));
		},
		updateItem: (item, qty) => {
			dispatch(AcUpdateProduct(item, qty));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);