import React, {Component, Fragment} from 'react'
import axios from 'axios'
const Chess = require('react-chess')

export default class chessGame extends Component {
  constructor(props) {
    super(props)
    this.props = props
    this.oponent = this.props.location.oponent
    this.state = {}
  }

  componentDidMount() {
    this.getGames()
  }

  getGames = async () => {
    try {
      const response = await axios.get('https://api.chess.com/pub/player/' + this.oponent + '/games/archives')
      const gamesPromises = []
      for (const monthArchive of response.data.archives) {
        const gamesByMonth = axios.get(monthArchive, { crossdomain: true })
        gamesPromises.push(gamesByMonth)
      }
      const gamesList = await Promise.all(gamesPromises)
      console.log("GamesList", gamesList)
    } catch (e) {
      console.error(e)
    }

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
