import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Books'
import sortBy from 'sort-by'

class SearchForm extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    sortBooks: PropTypes.func.isRequired
  }
  state = {
    query: '',
    searchResults: []
  }
  updateQuery = (query) => {
  this.setState({ query })
}
clearQuery = (query) => {
  this.setState({ query: ''})
}
  render(){
      const { query } = this.state
      const { books, sortBooks } = this.props
    let searchResults
    if(query){
        const match = new RegExp(escapeRegExp(query), 'i')
        searchResults = books.filter((book) => match.test(book.title) || match.test(book.authors))
    } else {
      searchResults = books
    }
    searchResults.sort(sortBy('title'))
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link className="close-search" to="/">Close Search</Link>
            <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
                value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
            </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {searchResults.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                sortBooks={this.props.sortBooks}
              />
            </li>
          ))}</ol>
        </div>
      </div>
    )
  }
}

export default SearchForm
