import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Books'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class SearchForm extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  state = {
    query: '',
    searchResults: [],
    shelf: ''
  }
  updateQuery = (query) => {
  this.setState({ query })
  this.updateResults(query)
  }
  updateResults = (query) => {
    if(query) {
    BooksAPI.search(query)
    .then((searchResults) => {
      if (searchResults.error) {
        this.setState({ searchResults : [] })
      } else {
        this.setState({ searchResults : searchResults })
      }

      })
    } else {
      this.setState({ searchResults : [] })
}
  }
  render(){

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
        {
          this.state.searchResults.map((searchResults) => (

          <li key={searchResults.id}>
            <Book book={searchResults}
              sortBooks={this.props.sortBooks}
            />
          </li>
        ))
      }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchForm
