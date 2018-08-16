import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './Books'
import { Link } from 'react-router-dom'
import SearchForm from './Search'

class BooksApp extends Component {
  state = {
    Books: [{
      want: [],
      current: [],
      read: []
    }]
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchForm />
        )}/>

        <Route exact path="/" render={() => (
          <Shelves />
          )}/>
      </div>
    )}
  }


export default BooksApp
