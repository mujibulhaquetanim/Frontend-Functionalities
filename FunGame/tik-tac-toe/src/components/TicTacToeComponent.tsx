function board() {
  return (
    <div>

    </div>
  )
}
function TicTacToeComponent() {
  return (
    <div className="container">
      <h1>Tic Tac Toe Game</h1>
      <div className="board">
        {board()}
      </div>
      <button className="reset-button">Reset</button>
    </div>
  )
}

export default TicTacToeComponent