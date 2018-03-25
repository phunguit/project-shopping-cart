import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AcUpdateCart, AcDelete, AcUpdateQuantity } from '../../actions/index';
import { filter } from 'lodash';

class CartItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			quantity: 1,
			image: '',
			inventory: 0,
			subTotal: 0
		};
	}

	componentWillMount() {
		if(this.props.item !== null && this.props.item.quantity > 0) {
			
			this.setState({
				id: this.props.item.id,
				name: this.props.item.name,
				description: this.props.item.description,
				quantity: this.props.item.quantity,
				price: this.props.item.price,
				image: this.props.item.image,
				inventory: this.props.item.inventory,
				subTotal: this.props.item.quantity*this.props.item.price
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps !== null && nextProps.item.quantity > 0) {
			this.setState({
				id: nextProps.item.id,
				name: nextProps.item.name,
				description: nextProps.item.description,
				quantity: nextProps.item.quantity,
				price: nextProps.item.price,
				image: nextProps.item.image,
				inventory: nextProps.item.inventory,
				subTotal: nextProps.item.quantity*nextProps.item.price
			});
		}
	}

	handleChange = (e) => {
		this.setState({
			quantity: e.target.value
		});
	}

	handleUpdate = (e) => {
		e.preventDefault();
		this.props.updateCart(this.state);
	}

	handleDelete = (e) => {
		e.preventDefault();
		var id = this.state.id;
		this.props.deleteItem(id);
		var itemDelete = filter(this.props.items, function(item) {
			return item.id === id;
		});
		this.props.updateQuantity(itemDelete);
	}

	render() {
		var { price } = this.props.item;
		return (
			<tr>
            	<th scope="row">1</th>
            		<td>{this.state.name}.</td>
              		<td>{price} USD</td>
              		<td><input name="cart-item-quantity-1" type="number" onChange={this.handleChange} value={this.state.quantity} min={1} /></td>
              		<td><strong>{this.state.subTotal} USD</strong></td>
              	<td>
            		<a className="label label-info update-cart-item" href="" onClick={this.handleUpdate}>Update</a>
                	<a className="label label-danger delete-cart-item" href="" onClick={this.handleDelete} data-product>Delete</a>
              	</td>
            </tr>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		cartItems: state.cartItems,
		items: state.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateCart: (item) => {
			dispatch(AcUpdateCart(item));
		},
		deleteItem: (id) => {
			dispatch(AcDelete(id));
		},
		updateQuantity: (item) => {
			dispatch(AcUpdateQuantity(item));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);