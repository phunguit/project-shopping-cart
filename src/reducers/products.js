import * as types from '../constants/Actions';

var defaultState 	= [
	{
		id: 'aplusautomation',
		name: 'aplusautomation',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
		price: 12,
		image: 'aplusautomation.jpg',
		canBuy: true
	},
	{
		id: 'aplusmedia',
		name: 'aplus media',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
		price: 12,
		image: 'aplus-media.jpg',
		canBuy: false
	},
	{
		id: 'robofigcombo',
		name: 'robo fig combo',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
		price: 12,
		image: 'robo_fig_combo.jpg',
		canBuy: true
	},
	{
		id: 'targetleapfrog',
		name: 'target leap frog',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
		price: 12,
		image: 'target-leap-frog.jpg',
		canBuy: true
	}
];

const products = (state = defaultState, action) => {
	switch(action.type) {
		case types.PRODUCT_LIST:
			return state;
		default:
			return state;
	}
}

export default products;