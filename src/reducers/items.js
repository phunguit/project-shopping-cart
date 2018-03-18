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
		inventory: 0,
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
	return state;
}

export default items;