import React, { Component } from 'react';
import './App.css';
import * as BooksApi from './BooksAPI';
import BookList from './BookList';
import { Link } from 'react-router-dom';

class BookShelf extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksApi.getAll().then((books) => {
            this.setState(() => ({
                books: books
            }))
        })
    }

    updateBook = ((book, shelf) => {
        BooksApi.update(book, shelf);
        this.setState((currentState) => ({
            books: currentState.books.map((b) => {
                if (b.id === book.id) {
                    b.shelf = shelf;
                }
                return b
            })
        }))
    })
    render() {
        return (
            <div>
                <div className='list-books-title'>
                    <h1>
                    MyReads
                    </h1>
                </div>
                <div className='list-books-content'>
                    <div className='bookshelf'>
                        <div className='bookshelf-title'>
                            <h2>Currently Reading</h2>
                        </div>
                        <BookList
                            books={this.state.books.filter((book) => book.shelf === 'currentlyReading')}
                            updateBook={this.updateBook}>
                        </BookList>
                    </div>
                    <div className='bookshelf'>
                        <div className='bookshelf-title'>
                            <h2>Want To Read</h2>
                        </div>
                        <BookList
                            books={this.state.books.filter((book) => book.shelf === 'wantToRead')}
                            updateBook={this.updateBook}>
                        </BookList>
                    </div>
                    <div className='bookshelf'>
                        <div className='bookshelf-title'>
                            <h2>Read</h2>
                        </div>
                        <BookList
                            books={this.state.books.filter((book) => book.shelf === 'read')}
                            updateBook={this.updateBook}>
                        </BookList>
                    </div>
                </div>
                <Link
                    to='/search'
                    className='open-search'>
                    <button />
                </Link>
            </div>
        )
    }
}

export default BookShelf;