import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import * as BooksApi from './BooksAPI';
import BookList from './BookList';

class Search extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
        if (query !== '') {
            BooksApi.search(query).then((books) => {
                if (!books.error) {
                    console.log(books)
                    this.setState(() => ({
                        books: books
                    }))
                }
            })
        }
    }
    updateBook = ((book, shelf) => {
        BooksApi.update(book, shelf);
    })
    render() {
        return (
            <div>
                <div className='search-books-input-wrapper'>
                    <div className='search-books-bar'>
                        <Link className='close-search' to='/' />
                        <input
                            type='text'
                            value={this.state.query}
                            placeholder='Search by Title or Author'
                            onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className='search-books-results'>
                    <BookList
                        books={this.state.books}
                        updateBook={this.updateBook}>
                    </BookList>
                </div>
            </div>
        )
    }
}

export default Search;