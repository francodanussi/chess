exports.calculateBestMove = game => {
    //generate all the moves for a given position
    const newGameMoves = game.ugly_moves()
    return newGameMoves[Math.floor(Math.random() * newGameMoves.length)];
}
