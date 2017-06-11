import React, { Component } from 'react';
import BookList from '../containers/booklist';
import BookDetail from '../containers/activebook';

class App extends Component{
    render(){
        return(
            <div className="container well">
                <h1>Hello React Redux</h1>
                <BookList/>
                <BookDetail/>
            </div>
        )
    }
}


export default App;