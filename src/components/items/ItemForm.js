import React, { Component } from 'react';

class ItemForm extends Component {

	render() {
		var { price, inventory } = this.props;

		var elePrice 	= <a data-product={1} href="" className="price"> {price} USD </a>;
		var eleQuantity =  <input name="quantity-product-1" type="number" defaultValue={1} min={1} />;
		if(!inventory) {
			elePrice 	= <span className="price"> {price} USD</span>;
			eleQuantity = null;
		}

		return (
			<form>
            	{ eleQuantity }
            	{elePrice}
            </form>
		)
	}

}

export default ItemForm;