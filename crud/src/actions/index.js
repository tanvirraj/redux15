export const SET_GAMES = 'SET_GAMES';

export function setGames(games) {
    return {
        type: SET_GAMES,
        games
    }
}

export function fetchGames(){
    return dispatch => {
        fetch('/api/games/')
        .then(res => res.json())
        .then(data => dispatch(setGames(data)))
    }
}


// const  game = {
//     name: "saper kela"
// }

// fetch('http://127.0.0.1:8000/api/games/',{
//     method: "POST",
//     header: {
//          'Content-Type': 'application/json'
//      },
//     body: JSON.stringify({name:"street fighter"})
// })
// .then(response => response.json())
// .then(json => console.log(json))