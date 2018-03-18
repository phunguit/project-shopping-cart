import { combineReducers }		from 'redux';
import items					from './items';
import itemToCart				from './itemToCart';

var reducers = combineReducers({
	items,
	itemToCart
});

export default reducers;