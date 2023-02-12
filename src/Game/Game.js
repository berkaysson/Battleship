import Ship from '../modules/Ship';
import Player from '../modules/Player';

const Game = () => {
  const player1 = Player();
  const player2 = Player();
  let turn = 0;
  let isGameOver = false;
  let winner = '';
  let ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];

  const startGame = () => { // check if necesary
    placeShipsPerson();
    placeShipsAI();
    playGame();
  }
  
  const playGame = () => {  // should check winner every turn, check if necesary ?
    while (!isGameOver) {
      checkWinner();
    }
  }

  const placeShipsPerson = (pos) => {
    if(ships.length === 0) return 'No ship left to placement.';
    if (
      player1.gameboard.placeShip([pos[0], pos[1]], pos[2], ships[0]) ===
      "Ship is placed"
    ) {
      ships.shift();
      return true;
    }
  }

  const placeShipsAI = () => {
    //  will use player2.gameboard.placeShip with argument from AI.js
    // every placement of ship will be removed from array of ships
  }

  const attackAI = () => {
    //  will use player1.gameboard.receiveAttack with argument form AI.js
    // can contain makeTurn
  }

  const currentShipLength = () => {
    if(ships.length === 0) return 'No ship left to placement.'
    return ships[0].length;
  }

  const checkWinner = () => {
    if (player1.checkWin(player2)) {
      isGameOver = true;
      winner = 'Player 1';
    } else if (player2.checkWin(player1)) {
      isGameOver = true;
      winner = 'Player 2';
    } else {
      isGameOver = false;
    }
  }

  const resetGame = () => {
    player1 = Player();
    player2 = Player();
    turn = 0;
    isGameOver = false;
    winner = '';
    ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
  }

  return {
    startGame,
    playGame,
    placeShipsPerson,
    placeShipsAI,
    attackAI,
    checkWinner,
    resetGame,
    player1,
    player2,
    currentShipLength
  };
};

export default Game;