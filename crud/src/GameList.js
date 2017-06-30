import React from 'react';
import PropTypes from 'prop-types';

const GameList = (games) =>{

    const errorMessage = (
        <p>There is no games in your collection</p>
    );

    const gamesList = (
        <p>games pages</p>
    );

    return(
        <div>
            {games.length === 0 ? errorMessage : gamesList}
        </div>
    )
}

GameList.propTypes = {
    games: PropTypes.array.isRequired
}

export default GameList;

