import React, { Component, Fragment } from 'react'
const Chess = require('react-chess')

export default class chessGame extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{width: 800, height: 800}}>
        <Chess/>
      </div>
    )
  }

}
