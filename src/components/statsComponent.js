import axios from 'axios'

const getGamesPlayer = async player => {
  try {
    // Fetch history of player selected using Chess.com API
    const playerChessHistory = await axios.get('https://api.chess.com/pub/player/' + player + '/games/archives')
    const gamesPromises = []
    // Map archive to get all games avalaible. Set crossdomain as true to avoid CORS problems
    for (const monthArchive of playerChessHistory.data.archives) {
      const gamesByMonth = axios.get(monthArchive, { crossdomain: true })
      gamesPromises.push(gamesByMonth)
    }
    const gamesList = await Promise.all(gamesPromises)
    depureGamesList(gamesList)
  } catch (e) {
    console.error(e)
  }
}

const depureGamesList = gamesList => {
  const games = gamesList.filter(game => game.status === 200)
  generateStats(games)
}

const generateStats = gamesOfPlayer => {

  // GET TIME FORMAT
  const stats = gamesOfPlayer.map(game => {

    stats[game.color] = {...getColorStats(game), ...stats[game.color]}

    switch (game.time_class) {
      case 'blitz':
        stats.blitz++
        break;
      default:
        stats.classic++
  }})



  // GET MATCHS AS WHITE AND BLACK. COUNT wins


}


const getColorStats = (game, player) => !!(game.white.username === player)
   ? game.white
   : game.black
  // Possible results: "win", "resigned", "timecontrol"
  // Current ELO. Last game, check if played as white or black. Get rating property.
  // Get total of matchs played : gamesofplayer.length
  // total wins (as white, black) : gamesofplayer.filter (if in black||white username === player and result win)
  // total loss (as white, black) : gamesofplayer.filter (if in black||white username === player and result loss)
  // total draws (as white, black) : draws = total - wins - loss
  // Most common first move as white . Parse Pgn
  // Most common first move as black. Parse Pgn
  // Most played time control. Map games taking time_control and count.


export default getGamesPlayer
