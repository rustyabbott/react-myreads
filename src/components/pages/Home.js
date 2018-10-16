import React from 'react'
import Shelf from '../Shelf'
import FAB from '../FAB'
import { getAll } from '../../BooksAPI.js'

export default class Home extends React.Component {
  async componentDidMount() {
    try {
      const books = await getAll();
      this.props.addBooks(books);
    } catch(error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf title="Currently Reading" books={ this.props.currentlyReading } moveBook={ this.props.moveBook } />
            <Shelf title="Want to Read" books={ this.props.wantToRead } moveBook={ this.props.moveBook } />
            <Shelf title="Read" books={ this.props.read } moveBook={ this.props.moveBook } />
          </div>
        </div>
        <FAB />
      </div>
    )
  }
}
