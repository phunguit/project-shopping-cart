import * as types from '../constants/Actions';
import config from '../constants/Config';

var defaultState = config.NOTI_READY_TO_BUY;

const notify = (state = defaultState, action) => {
	switch(action.type) {
		case types.CHANGE_NOTIFY:
			return action.content;
		default:
			return state;
	}
}

default export notify;