import React, { Component } from 'react'

class Book extends Component {


  render(){

    return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
        title={this.props.book.title}
          style={{
            backgroundImage: `url(${this.props.book.imageLinks ? this.props.book.imageLinks = this.props.book.imageLinks.thumbnail : "https://via.placeholder.com/140x200?text=Book+Cover"})`,
            alt: 'Book Cover',
            width: '100%',
            height: '100%'
          }}>
        </div>
        <div className="book-shelf-changer" title="Move Book">
          <select onChange={(event) => this.props.sortBooks(this.props.book, event.target.value)}
  	                value={this.props.book.shelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none" default={this.props.book.shelf ? this.props.book.shelf = this.props.book.shelf : this.props.book.shelf = "none"}>None</option>
          </select>
        </div>
      </div>
    <div className="book-title">{this.props.book.title ? this.props.book.title = this.props.book.title : ''}</div>
    <div className="book-authors">
      {this.props.book.authors ? this.props.book.authors.join(", ") : ''}
    </div>
    <a href={this.props.book.previewLink ? this.props.book.previewLink = this.props.book.previewLink : ''} target="_blank" className="see-more" title="See Details (Opens a new tab)">See Details</a>
  </div>
  )
  }
}
export default Book
