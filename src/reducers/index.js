import { combineReducers }	from 'redux';
import { products }			from './products';
import { carts }			from './carts';
import { notify }			from './notify';

const reducers = combineReducers({
	products,
	carts,
	notify
});

export default reducers;