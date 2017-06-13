export const GET_USER_NAME = 'GET_USER_NAME';

export const getUserName = name =>{
    console.log("github: ",name);
    return{
        type: GET_USER_NAME
    }
}


