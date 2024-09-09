function TicTacToeComponent() {
  return (
    <div className="container">
      <h1>Tic Tac Toe Game</h1>
      <div className="board">
        <Board />
      </div>
      <button className="reset-button">Reset</button>
    </div>
  );
}

export default TicTacToeComponent;

const Board = function Board() {
  return <div>
    <Row />
  </div>;
};

const Row = function Row() {
  return <div>
    <div className="boxes"></div>
    <div className="boxes"></div>
    <div className="boxes"></div>
  </div>;
};
