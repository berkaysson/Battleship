import Ship from "./Ship";

const Gameboard = (size) => {
  let board = createBoard(size); // 10x10 gameboard

  function placeShip(startPos, dir = 'hor', ship) {
    let endPos;
    if (dir === "ver") endPos = [startPos[0], startPos[1] + ship.length - 1];  
    else if (dir === "hor") endPos = [startPos[0] + ship.length - 1, startPos[1]];
    else return 'Direction is nor correct.'

    if(isInBoard(startPos) && isInBoard(endPos)){
      for (let x = startPos[0]; x <= endPos[0]; x++) {
        for (let y = startPos[1]; y <= endPos[1]; y++) {
          if(isEmpty([x,y])) board[x][y] = ship;
          else return 'The position is used.'
        }
      }
    }
    else{
      return 'Invalid position.'
    }
  }

  function receiveAttack(hitPos) {
    if(isInBoard(hitPos)){
      if(board[hitPos[0]][hitPos[1]] === 'Hit!') return 'This position has been hitted.'
      else if(board[hitPos[0]][hitPos[1]] instanceof Object){
        board[hitPos[0]][hitPos[1]].hit();
        if(board[hitPos[0]][hitPos[1]].isSunk()){
          board[hitPos[0]][hitPos[1]] = 'Hit!';
          return 'Ship Sunk!'
        }
        board[hitPos[0]][hitPos[1]] = 'Hit!';
      }
      else if(board[hitPos[0]][hitPos[1]] == null){
        board[hitPos[0]][hitPos[1]] = 'Miss!';
      }
    }
    else return 'Invalid position.'
  }

  function isShipLeft(){
    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board.length; y++) {
        if(board[x][y] instanceof Object){return true}
    }
  }
    return false;
  }

  function isInBoard(position) {
    if (
      position[0] < 0 ||
      position[1] < 0 ||
      position[0] > board.length ||
      position[1] > board.length
    ) {
      return false;
    }
    return true;
  }

  function isEmpty(position){
    if(board[position[0]][position[1]] == null) return true;
    else return false;
  }

  return { board, placeShip, receiveAttack, isShipLeft };
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