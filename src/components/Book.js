import React from 'react'
import * as BooksAPI from '../BooksAPI'

const Book = (props) => {
  const handleChange = async e => {
    try {
      const shelf = e.target.value;
      const book = props;
      const result = await BooksAPI.update(book, shelf);
      props.moveBook(book, shelf, result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${ props.imageLinks ? props.imageLinks.thumbnail : '' })`
          }}>
          </div>
          <div className="book-shelf-changer">
            <select onChange={ handleChange } value={ props.shelf || 'none' }>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ props.title }</div>
        <div className="book-authors">{ props.authors ? props.authors[0] : 'Unknown' }</div>
      </div>
    </li>
  )
}

export default Book
