import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import { fetchGames } from './actions/fetchGames';

class GamesPage extends Component{
    componentDidMount() {
        this.props.fetchGames();
    }
    render(){
        return(
            <div>
                <h1 className="Games-List-Header">Games List</h1>
                <GamesList games={this.props.games} />
            </div>
        )
    }
}

GamesPage.propTypes ={
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
}

function mapStateToProps(state){
    return {
        games: state.games
    }
}

export default connect(mapStateToProps,{ fetchGames })(GamesPage);

