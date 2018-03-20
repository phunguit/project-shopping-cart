import React, { Component } from 'react';

class CartItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			quantity: 1,
			subTotal: 0
		};
	}

	componentWillMount() {
		if(this.props.item !== null && this.props.item.quantity > 0) {		
			this.setState({
				id: this.props.item.id,
				name: this.props.item.name,
				quantity: this.props.item.quantity,
				subTotal: this.props.item.quantity*this.props.item.price
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps !== null && nextProps.item.quantity > 0) {

			this.setState({
				id: nextProps.item.id,
				name: nextProps.item.name,
				quantity: nextProps.item.quantity,
				subTotal: nextProps.item.quantity*nextProps.item.price
			});
		}
	}

	handleChange = (e) => {
		this.setState({
			quantity: e.target.value
		});
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
            		<a className="label label-info update-cart-item" href="" data-product>Update</a>
                	<a className="label label-danger delete-cart-item" href="" data-product>Delete</a>
              	</td>
            </tr>
		)
	}

}

export default CartItem;