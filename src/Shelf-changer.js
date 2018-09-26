import React, { Component } from 'react'

class ShelfChanger extends Component {
  state = {
    value: ''
  }
  updateState = (event) => {
    this.setState({ value: event.target.value})
    this.props.sortBooks(this.props.books, event.target.value)
  }

  render(){

    return (
      <div className="book-shelf-changer" title="Move Book">
          <select onChange={this.updateState}
                    value={this.props.books.shelf ? this.props.books.shelf : 'none'}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none" >None</option>
          </select>
        </div>
      )
  }
}
export default ShelfChanger
