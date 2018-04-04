import { findIndex, remove }	from 'lodash';

import * as types 				from '../constants/Actions';
import * as configs 			from '../constants/Config';

var defaultState 	= [];
var cartItems		= JSON.parse(localStorage.getItem(configs.CARTS_FROM_LOCAL_STOGARE));
defaultState		= (cartItems !== null && cartItems.length !== 0) ? cartItems : defaultState;

const carts = (state = defaultState, action) => {
	var { item, qty } = action;

	switch(action.type) {
		case types.BUY_PRODUCT:			
			var index = findIndex(state, (stateItem) => {
				return stateItem.item.id  === item.id;
			});
			
			if(index < 0) {
				state.push({item, qty});	
			} else {
				state[index].qty += qty;
			}
			localStorage.setItem(configs.CARTS_FROM_LOCAL_STOGARE, JSON.stringify(state));
			return [...state];

		case types.REMOVE_PRODUCT:
			remove(state, (ele, index) => {
				return ele.item.id === item.id;
			});
			localStorage.setItem(configs.CARTS_FROM_LOCAL_STOGARE, JSON.stringify(state));
			return [...state];
		default:
			return state;
	}
}

export default carts;