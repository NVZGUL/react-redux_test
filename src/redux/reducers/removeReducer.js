import {IS_REMOVE} from '../actions';

export default function reducer(state = {}, action){
	switch(action.type){
		case IS_REMOVE:
			return Object.assign({}, state, action.payload)
		default:
			return state
	}
}