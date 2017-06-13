import {GET_USER_NAME} from '../actions/index';

export default function(state=null, action){
    switch(action.type){
        case GET_USER_NAME:
            return state;
        default:
            return state
    }
    return state;
}

