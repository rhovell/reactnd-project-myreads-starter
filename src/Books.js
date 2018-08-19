import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Book extends Component {

  render(){
    const book = this.props.books;
    const sortBooks = this.props.sortBooks;

    return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
          backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`,
          width: '100%',
          height: '100%'
        }}></div>

        <div className="book-shelf-changer">
        <select onChange={(event) => this.props.sortBooks(this.props.book, event.target.value)}
	                value={this.props.book.shelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
        </select>
        </div>
      </div>
    <div className="book-title">{this.props.book.title}</div>
    <div className="book-authors">{this.props.book.authors}</div>
  </div>
  )
  }
}
export default Book
