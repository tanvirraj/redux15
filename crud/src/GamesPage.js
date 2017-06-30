import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GameList from './GameList.js';
import { fetchGames } from './actions/index';

class GamesPage extends Component{

    componentDidMount(){
        this.props.fetchGames();
    }

    render(){
        return(
            <div>
                <h1>Games List</h1>
                <GameList games={this.props.games} />
            </div>
        )
    }
}

GamesPage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
};


function mapStateToProps(games){
    return{
        games
    }
}

export default connect(mapStateToProps, { fetchGames })(GamesPage)


