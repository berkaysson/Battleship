const Gameboard = (size) => {
  let board = createBoard(size);

  function placeShip(startPos, dir, ship) {
    const endPos = getEndPosition(startPos, dir, ship.length);
    if (isAvailableToPlace(startPos, endPos)) {
      for (let x = startPos[0]; x <= endPos[0]; x++) {
        for (let y = startPos[1]; y <= endPos[1]; y++) {
          board[x][y] = ship;
        }
      }
      return "Ship is placed";
    } else {
      return "Invalid position.";
    }
  }

  function receiveAttack(hitPos) {
    if (isInBoard(hitPos)) {
      if (
        board[hitPos[0]][hitPos[1]] === "Hit!" ||
        board[hitPos[0]][hitPos[1]] === "Miss!"
      )
        return false;
      else if (board[hitPos[0]][hitPos[1]] instanceof Object) {
        board[hitPos[0]][hitPos[1]].hit();
        if (board[hitPos[0]][hitPos[1]].isSunk()) {
          board[hitPos[0]][hitPos[1]] = "Hit!";
          return "Ship Sunk!";
        }
        board[hitPos[0]][hitPos[1]] = "Hit!";
      } else if (board[hitPos[0]][hitPos[1]] == null) {
        board[hitPos[0]][hitPos[1]] = "Miss!";
      }
    } else return false;
  }

  function removeShip(shipID) {
    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board.length; y++) {
        if (board[x][y] instanceof Object) {
          if (board[x][y].getID() === shipID) {
            board[x][y] = null;
          }
        }
      }
    }
    return false;
  }

  function isShipLeft() {
    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board.length; y++) {
        if (board[x][y] instanceof Object) {
          return true;
        }
      }
    }
    return false;
  }

  function isInBoard(position) {
    if (
      position[0] < 0 ||
      position[1] < 0 ||
      position[0] > board.length - 1 ||
      position[1] > board.length - 1
    ) {
      return false;
    }
    return true;
  }

  function isEmpty(position) {
    if (board[position[0]][position[1]] == null) return true;
    else return false;
  }

  function isAvailableToPlace(startPos, endPos) {
    if (isInBoard(startPos) && isInBoard(endPos)) {
      for (let x = startPos[0]; x <= endPos[0]; x++) {
        for (let y = startPos[1]; y <= endPos[1]; y++) {
          if (!isEmpty([x, y])) return false;
          if (checkAdjacentGridsForPlace([x, y])) return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  function checkAdjacentGridsForPlace(position) {
    const adjacentPositions = [
      [position[0] - 1, position[1]],
      [position[0] + 1, position[1]],
      [position[0], position[1] - 1],
      [position[0], position[1] + 1],
    ];

    for (let i = 0; i < adjacentPositions.length; i++) {
      const [x, y] = adjacentPositions[i];
      if (isInBoard([x, y]) && !isEmpty([x, y])) {
        return true;
      }
    }
  }

  function isAvailableToHit(position) {
    if(!isInBoard(position)) return false;
    if (
      board[position[0]][position[1]] !== "Hit!" &&
      board[position[0]][position[1]] !== "Miss!"
    )
      return true;
    else return false;
  }
  
  function getEndPosition(startPos, dir, distance) {
    let endPos;
    if (dir === "hor") endPos = [startPos[0], startPos[1] + distance - 1];
    else if (dir === "ver") endPos = [startPos[0] + distance - 1, startPos[1]];
    else return false;

    return endPos;
  }

  return {
    board,
    placeShip,
    receiveAttack,
    isShipLeft,
    isInBoard,
    isEmpty,
    getEndPosition,
    removeShip,
    isAvailableToHit,
    isAvailableToPlace
  };
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
