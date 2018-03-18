import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class ItemList extends Component {

	render() {
		var { items } = this.props;

		var elementItem = items.map((item, index) => {
			return (
				<Item item={item} key={index} />
			)
		});

		return (
			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
	            <div className="panel panel-primary"> 
	              <div className="panel-heading"><h1 className="panel-title">List Products</h1></div> 
	              <div className="panel-body" id="list-product">{elementItem}</div>
	            </div>
	          </div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		items: state.items
	}
}

export default connect(mapStateToProps, null)(ItemList);