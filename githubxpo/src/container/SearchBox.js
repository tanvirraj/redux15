import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserName } from '../actions/index'
import '../SearchBox.css'

class SearchBox extends Component{

    constructor(props){
        super(props);

        this.state = {text: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({text:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();


        this.props.getUserName(this.state.text);
        this.setState({text: ''})
    }

    render(){
        return(
            <div className='container well'>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Search by username</label>
                    <input
                        onChange={this.handleChange}
                        value={this.state.text}
                        type="text"
                        className="form-control"
                        placeholder="tanvirraj" />
                  </div>
                  <button type="submit" className="btn btn-default submitButton">Submit</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getUserName }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBox);