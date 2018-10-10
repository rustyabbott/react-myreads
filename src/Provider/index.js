import React from 'react'
export const MyContext = React.createContext();

export default class index extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: []
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
