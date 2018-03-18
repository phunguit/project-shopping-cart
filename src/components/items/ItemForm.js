import React, { Component } from 'react';

class ItemForm extends Component {

	render() {
		var { price, inventory } = this.props;

		var elePrice = <a data-product={1} href="" className="price"> {price} USD </a>;
		if(!inventory) {
			elePrice = <span className="price"> {price} USD</span>;
		}
		
		return (
			<form>
            	<input name="quantity-product-1" type="number" defaultValue={1} min={1} />
            	{elePrice}
            </form>
		)
	}

}

export default ItemForm;