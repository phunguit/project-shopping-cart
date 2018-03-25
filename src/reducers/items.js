import * as Action 	from '../constants/Actions';
import { findIndex, reject } from 'lodash';
const uuidv4 = require('uuid/v4');

var defaultState = [
	{
		id: uuidv4(),
		name: 'aplusautomation',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
		price: 18,
		inventory: 1,
		image: 'aplusautomation.jpg'
	},
	{
		id: uuidv4(),
		name: 'aplus media',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
		price: 12,
		inventory: 1,
		image: 'aplus-media.jpg'
	},
	{
		id: uuidv4(),
		name: 'robo fig combo',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
		price: 15,
		inventory: 2,
		image: 'robo_fig_combo.jpg'
	},
	{
		id: uuidv4(),
		name: 'target leap frog',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
		price: 10,
		inventory: 0,
		image: 'target-leap-frog.jpg'
	}
];

const items = (state = defaultState, action) => {

	switch(action.type) {
		case Action.UPDATE_QUANTITY:

			var id = action.item[0].id;
			var index = findIndex(state, {id});

			state = reject(state, {id});

			state.splice(index, 0, {
				id,
				name: action.item[0].name,
				description: action.item[0].description,
				price: action.item[0].price,
				inventory: +action.item[0].inventory,
				quantity: 0,
				image: action.item[0].image
			});
			return state;


		default:
			return state;
	}
}

export default items;