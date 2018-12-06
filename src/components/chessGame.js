import React, {Component, Fragment} from 'react'
import axios from 'axios'
import getGamesPlayer from './statsComponent'
const Chess = require('react-chess')

export default class chessGame extends Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {}
  }

  componentDidMount() {
    getGamesPlayer(this.props.location.oponent)
  }

  render() {
    return (<div style={{
        width: 800,
        height: 800
      }}>
      <Chess/>
    </div>)
  }

}
