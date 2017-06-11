import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';


class BookList extends Component{
    booklist(){
        return this.props.books.map( (book) =>{
            return(
                <li
                onClick={() => this.props.selectBook(book)}
                className="list-group-item"
                key={book.title}>

                    {book.title}
                </li>
            )
        })
    }

    render(){
        return(
            <div>
                <ul className="list-group col-sm-4">
                    {this.booklist()}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        books: state.books
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
