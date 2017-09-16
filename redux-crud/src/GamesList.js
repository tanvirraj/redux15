import React from 'react';
import PropTypes from 'prop-types';


const GamesList = games => {

    const emptyMessage = (
        <div>There is no games </div>
    );

    const gamesList = (
        <div>games list goes here </div>
    );

    return (
        <div>
            { games.length === 0 ? emptyMessage : gamesList }
        </div>
    );

}


GamesList.propTypes= {
    games: PropTypes.array.isRequired
}

export default GamesList;