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
    this.getGamesOponent()
  }

  getGamesOponent = async () => {
    try {
      // Fetch history of oponent selected using Chess.com API
      const oponentChessHistory = await axios.get('https://api.chess.com/pub/player/' + this.oponent + '/games/archives')
      const gamesPromises = []
      // Map archive to get all games avalaible. Set crossdomain as true to avoid CORS problems
      for (const monthArchive of oponentChessHistory.data.archives) {
        const gamesByMonth = axios.get(monthArchive, { crossdomain: true })
        gamesPromises.push(gamesByMonth)
      }
      const gamesList = await Promise.all(gamesPromises)
      this.depureGamesList(gamesList)
    } catch (e) {
      console.error(e)
    }

  }

  depureGamesList = gamesList => {
    const depuredList = gamesList.reduce((list, game) => {
        if (game.status === 200) {
          list.push(game.data)
        }
        return list
    }, [])
    const gamesArray = []
    depuredList.map(el => {
      gamesArray.push(...el.games)
    })
    this.generateStats(gamesArray)
  }

  generateStats = (gamesOfOponent) => {
    console.table(gamesOfOponent)

    // Possible results: "win", "resigned", "timecontrol"
    // Current ELO. Last game, check if played as white or black. Get rating property.
    // Get total of matchs played : gamesofOponent.length
    // total wins (as white, black) : gamesofOponent.filter (if in black||white username === oponent and result win)
    // total loss (as white, black) : gamesofOponent.filter (if in black||white username === oponent and result loss)
    // total draws (as white, black) : draws = total - wins - loss
    // Most common first move as white . Parse Pgn
    // Most common first move as black. Parse Pgn
    // Most played time control. Map games taking time_control and count.
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
