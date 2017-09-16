import React, { Component } from 'react';
import { connect } from 'react-redux'
import GamesList from './GamesList';
import PropTypes from 'prop-types';


class GamesPage extends Component{
    render(){
        return(
            <div>
                <h1>OMG Games List Page</h1>
                <GamesList games={this.props.games} />
            </div>
        )
    }
};

function mapStateToProps(state){
    return {
        games: state.games
    }
}

GamesPage.propTypes = {
    games: PropTypes.array.isRequered
}

export default connect(mapStateToProps)(GamesPage);