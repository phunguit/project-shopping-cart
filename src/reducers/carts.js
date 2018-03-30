import * as types 	from '../constants/Actions';
import * as configs from '../constants/Config';

var defaultState 	= [];
var cartItems		= JSON.parse(localStorage.getItem(configs.CARTS_FROM_LOCAL_STOGARE));
defaultState		= (cartItems !== null && cartItems.length !== 0) ? cartItems : defaultState;

const carts = (state = defaultState, action) => {

	switch(action.type) {
		case types.BUY_PRODUCT:
			return state;
		default:
			return state;
	}
}

export default carts;