import React, { Component, Fragment } from 'react'
const Chess = require('react-chess')
const style = {
  width: "50%"
}
export default class chessGame extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Chess style={style}/>
    )
  }

}
