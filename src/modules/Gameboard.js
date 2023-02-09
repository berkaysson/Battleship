const Gameboard = (size) => {
  let board = createBoard(size); // 10x10 gameboard

  function placeShip(startPos, endPos, ship){ //check later for length and positions matches
    for(let x = startPos[0]; x <= endPos[0]; x++){
      for(let y = startPos[1]; y <= endPos[1]; y++ ){
        board[x][y] = ship;
      }
    } 
  }

  return { board, placeShip };
};

function createBoard(size) {
  if (typeof size !== "number") return "Size must be number.";

  let board = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(null);
    }
    board.push(row);
  }
  return board;
}

export default Gameboard;
