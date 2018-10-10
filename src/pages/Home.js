import React from 'react'
import Shelf from '../components/Shelf'
import FAB from '../components/FAB'
import { getAll } from '../BooksAPI.js'

export default class Home extends React.Component {
  async componentDidMount() {
    try {
      const books = await getAll();
      console.log(books);
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
            <Shelf title="Currently Reading" />
            <Shelf title="Want to Read" />
            <Shelf title="Read" />
          </div>
        </div>
        <FAB />
      </div>
    )
  }
}
