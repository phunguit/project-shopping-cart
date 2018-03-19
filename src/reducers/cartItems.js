import * as Action 	from '../constants/Actions'; 
import { uniq }		from 'lodash';
var defaultState = [];


const cartItems = (state = defaultState, action) => {
	switch(action.type) {

		case Action.ADD_TO_CART:
			return uniq([...state, action.item], 'id');

		default:
			return state;
	}
}

export default cartItems;