import { combineReducers }		from 'redux';
import items					from './items';
import cartItems				from './cartItems';

var reducers = combineReducers({
	items,
	cartItems
});

export default reducers;