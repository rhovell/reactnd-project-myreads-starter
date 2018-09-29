import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Books'
import * as BooksAPI from './BooksAPI'
import debounce from 'lodash.debounce'

class SearchForm extends Component {
  state = {
      searchResults: []
  }
  componentWillMount = () => {
     this.delayedCallback = debounce(function (event) {
       this.updateResults(event.target.value);
     }, 1000);
  }

  onChange = (event) => {
    event.persist();
    this.delayedCallback(event);
  }
  updateResults = (query) => {
    if(query) {
      BooksAPI.search(query).then((searchQuery) => {
      for(var result of searchQuery){
        for(var book of this.props.books){
          if(book.title === result.title) {
            result.shelf = book.shelf
          }
        }
      }
      this.setState({ searchResults : searchQuery })
      }).catch((error) => {
        this.setState({ searchResults : [] })
        console.log('Error on search request')
        })
    } else {
      this.setState({ searchResults : [] })
      }
  }


  render() {

      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="search-books">
          <div className="search-books-bar">
          <Link className="close-search" to="/">Close Search</Link>
              <div className="search-books-input-wrapper">
              <input
                onChange={(event) => this.onChange(event)}
                placeholder="Search by title or author"
                type="search"
              />
              </div>
          </div>
          <div className="search-books-results">
          <ol className="books-grid">
          {this.state.searchResults.length > 0  ?
            this.state.searchResults.map((searchResult) => (
            <li key={searchResult.id ? searchResult.id : ''}>
              <Book book={searchResult}
                sortBooks={this.props.sortBooks}
                shelf={this.props.books.shelf}
            />
            </li>
          )) : <li className="no-results">No Results Found.</li>}
          </ol>
        </div>
      </div>
      </div>
      )
  }
}

export default SearchForm
