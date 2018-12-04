import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Start from './components/startComponent'
import playChess from './components/chessGame'
import selectOponent from './components/selectOponent'
import selectCountry from './components/selectCountry'

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path='/' name='Start Page' component={Start} />
            <Route exact path='/selectCountry' name='Country Select' component={selectCountry} />
            <Route exact path='/selectOponent' name='Oponent Select' component={selectOponent} />
            <Route exact path='/playChess' name='ChessGame' component={playChess} />
          </Switch>
        </HashRouter>
    )
  }
}

export default App
