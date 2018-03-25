import * as Action 	from '../constants/Actions'; 
import { uniq, reject, findIndex, uniqBy }		from 'lodash';
var defaultState = [];


const cartItems = (state = defaultState, action) => {
	switch(action.type) {

		case Action.ADD_TO_CART:
			console.log(uniqBy([...state, action.item], 'id'));
			return uniqBy([...state, action.item], 'id');

		case Action.UPDATE_CART:
			var id = action.item.id;
			var index = findIndex(state, {id: action.item.id});

			state = reject(state, {id: action.item.id});

			state.splice(index, 0, {
				id,
				name: action.item.name,
				description: action.item.description,
				price: action.item.price,
				quantity: +action.item.quantity,
				image: action.item.image,
				inventory: action.item.inventory
			});

			return [...state];

		case Action.DELETE_ITEM:
			state = reject(state, {id: action.id});
			return [...state];

		default:
			return state;
	}
}

export default cartItems;