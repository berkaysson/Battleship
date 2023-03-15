import Player from "../modules/Player";
import Computer from "./Computer";

const Game = () => {
  let player1 = new Player;
  let player2 = new Computer;
  let isGameOver = false;
  let winner = "";

  const placeShipsPerson = (pos) => {
    if (
      player1.gameboard.placeShip(
        [pos[0], pos[1]],
        pos[2],
        player1.peekShip()
      ) === "Ship is placed"
    ) {
      player1.dequeShip();
    }
  };

  const removeShipsPerson = (shipID) => {
    player1.gameboard.removeShip(shipID);
    player1.addShip(Number(shipID[7]));
  };

  const placeShipsAI = () => {
    while (player2.peekShip() != "No ship left.") {
      if (
        player2.gameboard.placeShip(
          player2.getRandomPosition(),
          player2.getRandomDirection(),
          player2.peekShip()
        ) === "Ship is placed"
      ) {
        player2.dequeShip();
      }
    }
  };

  const attackPerson = (position) => {
    checkWinner();
    if (isGameOver === true) return;
    return player2.gameboard.receiveAttack(position);
  };

  const attackAI = () => {
    checkWinner();
    if (isGameOver === true) return;
    player1.gameboard.receiveAttack(player2.getAttackPosition(player1.gameboard));
  };

  const checkWinner = () => {
    if (!player2.gameboard.isShipLeft()) {
      winner = "Player 1";
      isGameOver = true;
    } else if (!player1.gameboard.isShipLeft()) {
      winner = "Computer";
      isGameOver = true;
    } else {
      isGameOver = false;
    }
  };

  const getisGameOver = () => {
    return isGameOver;
  };

  const getWinner = () => {
    return winner;
  };

  return {
    placeShipsPerson,
    placeShipsAI,
    attackAI,
    checkWinner,
    removeShipsPerson,
    attackPerson,
    attackAI,
    getisGameOver,
    getWinner,
    player1,
    player2,
  };
};

export default Game;
