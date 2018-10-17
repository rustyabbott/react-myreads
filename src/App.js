import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Search from './components/pages/Search'
import Provider, { PageContext } from './Provider/index'

// Thank you to Forrest Walker for an excellent walk-through: https://www.youtube.com/watch?v=bpKI3R0nf7E
// Thank you to Ryan Waite for an excellent walk-through: https://www.youtube.com/watch?v=acJHkd6K5kI
class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
          <Switch>
            <Route exact path={ '/' } render={() => (
                <PageContext.Consumer>
                  { value => <Home { ...value } /> }
                </PageContext.Consumer>
              )}
            />
            <Route exact path={ '/search' } render={() => (
                <PageContext.Consumer>
                  { value => <Search { ...value } /> }
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
