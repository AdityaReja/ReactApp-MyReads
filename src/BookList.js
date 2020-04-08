import React, { Component } from 'react';
import './App.css';

class BookList extends Component {
    render() {
        const { books, updateBook } = this.props
        return (
            <div className='bookshelf-books'>
                <ul className='books-grid'>
                    {books.map((book) => (
                        <li className='book' key={book.id}>
                            <div className='book-top'>
                                <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }} />
                                <div className='book-shelf-changer'>
                                    <select onChange={(event) => updateBook(book, event.target.value)} defaultValue = {book.shelf ? book.shelf : 'none'}>
                                        <option value='currentlyReading'>Currently Reading</option>
                                        <option value='wantToRead'>Want to Read</option>
                                        <option value='read'>Read</option>
                                        <option value='none'>None</option>
                                    </select>
                                </div>
                            </div>
                            <p className='book-title'>
                                {book.title}
                            </p>
                            <p className='book-authors'>
                                {book.authors}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default BookList;