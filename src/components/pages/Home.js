import React from 'react'
import Shelf from '../Shelf'
import FAB from '../FAB'
import * as BooksAPI from '../../BooksAPI'

export default class Home extends React.Component {
  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.props.addBooks(books);
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf name="Currently Reading" books={ this.props.currentlyReading } moveBook={ this.props.moveBook } />
            <Shelf name="Want to Read" books={ this.props.wantToRead } moveBook={ this.props.moveBook } />
            <Shelf name="Read" books={ this.props.read } moveBook={ this.props.moveBook } />
          </div>
        </div>
        <FAB />
      </div>
    )
  }
}
