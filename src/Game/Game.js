import Ship from '../modules/Ship';
import Player from '../modules/Player';
import AI from './AI';

const Game = () => {
  const player1 = Player();
  const player2 = Player();
  let turn = 0;
  let isGameOver = false;
  let winner = '';
  let ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];  // ships will be inside of Player

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
    if (
      player1.gameboard.placeShip([pos[0], pos[1]], pos[2], player1.getShip()) ===
      "Ship is placed"
    ) {
      player1.dequeShip();
    }
  }

  const placeShipsAI = () => {
    while(player2.getShip() != 'No ship left.'){
      if(player2.gameboard.placeShip(AI.getRandomPosition(), AI.getRandomDirection(), player2.getShip()) === 
        "Ship is placed"){
          player2.dequeShip()
        }
    }
  }

  const attackAI = () => {
    //  will use player1.gameboard.receiveAttack with argument form AI.js
    // can contain makeTurn
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
  };
};

export default Game;