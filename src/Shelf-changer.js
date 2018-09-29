import React, { Component } from 'react'

class ShelfChanger extends Component {
  state = {
    value: 'none'
  }
  updateState = (event) => {
    this.setState({ value: event.target.value})
    this.props.sortBooks(this.props.books, event.target.value)
  }

  render(){

    return (
      <div className="book-shelf-changer" title="Move Book">
          <select onChange={this.updateState}
                    value={this.props.shelf ? this.props.shelf : this.state.value}>
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
