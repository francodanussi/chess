import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Start from './components/startComponent'
import playChess from './components/chessGame'

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path='/' name='Login Page' component={Start} />
            <Route exact path='/playChess' name='ChessGame' component={playChess} />
          </Switch>
        </HashRouter>
    )
  }
}

export default App
