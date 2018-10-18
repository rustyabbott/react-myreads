import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'
import { DebounceInput } from 'react-debounce-input'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.props.addBooks(books);
    })
  }

  handleChange = async e => {
    try {
      const query = e.target.value;
      this.setState({ query });
      if (query) {
        const results = await BooksAPI.search(query);
        if (results.error) {
          this.setState({ books: [] });
        } else {
          this.setState({ books: results });
        }
      } else {
        this.setState({ books: [] });
      }
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <DebounceInput debounceTimeout={ 1000 } type="text" placeholder="Search by title or author" onChange={ this.handleChange } value={ this.state.query } />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { this.state.books.length > 0 && this.state.books.map(book => {
              const foundShelf = this.props.books.find(searchBook => searchBook.id === book.id);
              if (foundShelf) {
                book.shelf = foundShelf.shelf;
              } else {
                book.shelf = 'none';
              }
              console.log(foundShelf);
              return <Book key={ book.id } { ...book } moveBook={ this.props.moveBook } />
              }
            )}
          </ol>
        </div>
      </div>
    )
  }
}
