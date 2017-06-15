import axios from 'axios';


export const GET_USER_NAME = 'GET_USER_NAME';

export const githubUserName = name =>{

    const url = `https://api.github.com/users/${name}`
    const request = axios.get(url);
    console.log(request)


    return{
        type: GET_USER_NAME,
        payload: request
    }
}


