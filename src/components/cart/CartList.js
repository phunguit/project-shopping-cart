import React, { Component } from 'react';
import { connect }			from 'react-redux';
import CartItem 			from './CartItem';

class CartList extends Component {

	render() {
		var { cartItems }	= this.props;
		var statusCart		= null;
		var totalItems		= cartItems.length;
		var cartTotal		= 0;

		if(cartItems.length === 0) {
			statusCart = <tr><th colSpan={6}>Empty product in your cart</th></tr>;
		}

		var cartEleItems = cartItems.map((item, index) => {
			return (
				<CartItem key={index} item={item} />
			);
		});

		for(var i = 0; i < cartItems.length; i++) {
			cartTotal += cartItems[i].quantity*cartItems[i].price;
		}

		return (
			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	            <div className="panel panel-danger"> 
	              <div className="panel-heading"><h1 className="panel-title">Your Cart</h1></div> 
	              <div className="panel-body">
	                <table className="table">
	                  <thead>
	                    <tr>
	                      <th width="4%"></th>
	                      <th>Pokemon</th>
	                      <th width="15%">Price</th>
	                      <th width="4%">Quantity</th>
	                      <th width="20%">Subtotal</th>
	                      <th width="25%">Action</th>
	                    </tr>
	                  </thead>
	                  <tbody id="my-cart-body">{cartEleItems}</tbody>
	                  <tfoot id="my-cart-footer">
	                    {/* CART FOOTER */}
	                    {statusCart}
	                    <tr>
	                      <td colSpan={4}>There are <b>{totalItems}</b> items in your shopping cart.</td>
	                      <td colSpan={2} className="total-price text-left">{cartTotal} USD</td>
	                    </tr>
	                  </tfoot>
	                </table>
	              </div>
	            </div>
	            <div className="alert alert-success" role="alert" id="mnotification">Updated <b>ivysaur</b></div>
          	</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		cartItems: state.cartItems
	}
}

export default connect(mapStateToProps)(CartList);