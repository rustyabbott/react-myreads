import React from 'react'
export const MyContext = React.createContext();

export default class index extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      addBooks: books => {
        const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
        const wantToRead = books.filter(book => book.shelf === 'wantToRead');
        const read = books.filter(book => book.shelf === 'read');
        this.setState({ books, currentlyReading, read, wantToRead });
      }
    }
  }

  render() {
    return (
      <MyContext.Provider value={{ ...this.state }}>
        { this.props.children }
      </MyContext.Provider>
    )
  }
}
