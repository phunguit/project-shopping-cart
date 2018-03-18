import * as Action from '../constants/Actions'; 

var defaultState = {};


const itemToCart = (state = defaultState, action) => {
	switch(action.type) {

		case Action.ADD_TO_CART:
			console.log(action.item);
			return action.item;

		default:
			return state;
	}
}

export default itemToCart;