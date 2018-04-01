import { findIndex }	from 'lodash';

import * as types 		from '../constants/Actions';
import * as configs 	from '../constants/Config';

var defaultState 	= [];
var cartItems		= JSON.parse(localStorage.getItem(configs.CARTS_FROM_LOCAL_STOGARE));
defaultState		= (cartItems !== null && cartItems.length !== 0) ? cartItems : defaultState;

const carts = (state = defaultState, action) => {

	switch(action.type) {
		case types.BUY_PRODUCT:
			var { item, qty } = action;
			var index = findIndex(state, (stateItem) => {
				return stateItem.item.id  === item.id;
			});
			
			if(index < 0) {
				state.push({item, qty});	
			} else {
				state[index].qty += qty;
			}
			console.log(state);			
			return [...state];
		default:
			return state;
	}
}

export default carts;