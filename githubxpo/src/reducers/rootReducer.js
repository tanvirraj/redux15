import { combineReducers } from 'redux';
import getUserName from './github';

const rootReducer = combineReducers({
    getUserName
});

export default rootReducer;