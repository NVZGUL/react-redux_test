import { combineReducers } from 'redux';
import getText from  './inputReducer';
import isRemoveText from './removeReducer';


const rootReducer = combineReducers({
	getText,
	isRemoveText
})
export default rootReducer;