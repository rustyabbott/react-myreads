import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Search from './components/pages/Search'
import Provider, { PageContext } from './Provider/index'

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
                <PageContext.Consumer>
                  { context => <Home { ...context } /> }
                </PageContext.Consumer>
              )}
            />
            <Route
              exact path={ '/search' }
              render={() => (
                <PageContext.Consumer>
                  { context => <Search { ...context } /> }
                </PageContext.Consumer>
              )}
            />
          </Switch>
        </Provider>
      </div>
    )
  }
}

export default BooksApp
