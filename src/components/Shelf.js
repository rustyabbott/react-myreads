import React from 'react'
import Book from './Book'

export default class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.name }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.props.books && this.props.books.map(book =>
              <Book key={ book.id }{ ...book } moveBook={ this.props.moveBook } />
            ) }
          </ol>
        </div>
      </div>
    )
  }
}
