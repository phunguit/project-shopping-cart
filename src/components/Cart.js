import React, { Component } from 'react';
import { connect }			from 'react-redux';
import CartItem 			from './CartItem';
import Notify 				from './Notify';

class Cart extends Component {

	render() {
		var { items } = this.props;

		return (
			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
			  <div className="panel panel-danger"> 
			    <div className="panel-heading"><h1 className="panel-title">Your Cart</h1></div> 
			    <div className="panel-body">
			      <table className="table">
			        <thead>
			          <tr>
			            <th width="4%">#</th>
			            <th>Pokemon</th>
			            <th width="15%">Price</th>
			            <th width="4%">Quantity</th>
			            <th width="20%">Subtotal</th>
			            <th width="25%">Action</th>
			          </tr>
			        </thead>
			        {this.showElementBody(items)}
			        {this.showElementFooter(items)}
			      </table>
			    </div>
			  </div>
				<Notify />
			</div>

		);
	}

	showElementBody(items) {
		var xhtml = null;

		if(items.length !== 0) {
			xhtml = items.map((item, index) => {
				<CartItem />
			});
		}
		return <tbody id="my-cart-body">{xhtml}</tbody>;
	}

	showElementFooter(items) {
		var xhtml = <tr><th colSpan={6}>Empty product in your cart</th></tr>;
		if(items.length !== 0) {
			xhtml = <tr>
			            <td colSpan={4}>There are <b>5</b> items in your shopping cart.</td>
			            <td colSpan={2} className="total-price text-left">12 USD</td>
			        </tr>
		}

		return <tfoot id="my-cart-footer">{xhtml}</tfoot>;
	}
}

var mapStateToProps = (state) => {
	return {
		items: state.carts
	}
}

export default connect(mapStateToProps)(Cart);