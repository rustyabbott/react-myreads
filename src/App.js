import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Provider, { MyContext } from './Provider/index'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
          <Switch>
            <Route exact path={ '/' } component={ Home } />
            <Route exact path={ '/search' } component={ Search } />
          </Switch>
        </Provider>
      </div>
    )
  }
}

export default BooksApp
