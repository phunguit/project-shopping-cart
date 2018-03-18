import React, { Component } from 'react';
import ItemForm from './ItemForm';

class Item extends Component {

	render() {
		var { name, description, price, inventory, image, id } = this.props.item;
		return (
			<div className="media product">
        <div className="media-left">
          <a href="">
            <img className="media-object" src={`images/${image}`} alt="target-leap-frog" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{name}</h4>
          <p>{description}</p>

          <ItemForm inventory={inventory} price={price} id={id} />

        </div>
      </div>
		)
	}
}

export default Item;