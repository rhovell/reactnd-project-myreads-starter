import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Books'


class Shelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    sortBooks: PropTypes.func.isRequired
  }
  render(){
    const books = this.props.books;
    const sortBooks = this.props.sortBooks;
    let shelfTitle = this.props.shelf;


    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(books =>
                      books.shelf === 'currentlyReading').map(book => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            sortBooks={this.props.sortBooks}
                          />
                        </li>
                    ))
                  }
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want To Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(books =>
                      books.shelf === 'wantToRead').map(book => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            sortBooks={this.props.sortBooks}
                          />
                        </li>
                    ))
                  }
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(books =>
                      books.shelf === 'read').map(book => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            sortBooks={this.props.sortBooks}
                          />
                        </li>
                    ))
                  }
                </ol>
              </div>
            </div>

            </div>
          </div>

            <div className="open-search">
            <Link className="add-a-book" to="/search">Add a book</Link>
            </div>

        </div>
    )
  }
}

export default Shelves
