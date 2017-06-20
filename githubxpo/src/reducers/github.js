import {GET_USER_NAME} from '../actions/index';


const getUserName = (state={}, action) => {
    console.log("Action Received", action)
    switch(action.type){
        case GET_USER_NAME:
            return action.payload.data;
        default:
            return state;
    }
};

// this si
export default getUserName;