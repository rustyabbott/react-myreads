import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Provider, { MyContext } from './Provider/index'

// Thank you to Forrest Walker for an excellent walk-through: https://www.youtube.com/watch?v=bpKI3R0nf7E
class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
          <Switch>
            <Route
              exact path={ '/' }
              render={() => (
                <MyContext.Consumer>
                  { context => <Home { ...context } /> }
                </MyContext.Consumer>
              )}
            />
            <Route
              exact path={ '/search' }
              render={() => (
                <MyContext.Consumer>
                  { context => <Search { ...context } /> }
                </MyContext.Consumer>
              )}
            />
          </Switch>
        </Provider>
      </div>
    )
  }
}

export default BooksApp
