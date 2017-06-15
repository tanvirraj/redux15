import { combineReducers } from 'redux';
import getUserName from './github';

const rootReducer = combineReducers({
    name: getUserName
});

export default rootReducer;