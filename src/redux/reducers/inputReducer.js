import {INPUT_TEXT} from '../actions';

export default function reducer(state = {}, action) {
	switch (action.type){
		case INPUT_TEXT:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}