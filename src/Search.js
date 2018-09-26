import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Books'
import * as BooksAPI from './BooksAPI'
import DebounceInput from 'react-debounce-input'
import debounce from 'lodash.debounce'

class SearchForm extends Component {
  state = {
      searchResults: []
  }
  componentWillMount = () => {
     this.delayedCallback = debounce(function (event) {
       this.updateResults(event.target.value);
     }, 500);
  }

  onChange = (event) => {
    event.persist();
    this.delayedCallback(event);
}
  updateResults = (query) => {
    let i;
    if(query) {
      BooksAPI.search(query).then((searchQuery) => {
      for(var result of searchQuery){
        for(var book of this.props.books){
        // var book = this.props
        // for(var result of this.state.searchResults){
            // var book = this.props
              if(book.title === result.title) {
                // console.log(book)
                // console.log(result)
              console.log('book.title matches searchQuery[i].title')
                result.shelf = book.shelf
              } else {
                result.shelf = 'none'
                console.log('no matching title')
              }
            }
      }
      this.setState({ searchResults : searchQuery })
      }).catch((error) => {
        this.setState({ searchResults : [] })
        console.log('Error on search request')
        })
    } else {
      console.log('No search')
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
