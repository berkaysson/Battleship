import Ship from '../modules/Ship';
import Player from '../modules/Player';
import AI from './AI';

const Game = () => {
  let player1 = Player();
  let player2 = Player();
  let isGameOver = false;
  let winner = '';

  const placeShipsPerson = (pos) => {
    if (
      player1.gameboard.placeShip([pos[0], pos[1]], pos[2], player1.getShip()) ===
      "Ship is placed"
    ) {
      player1.dequeShip();
    }
  }

  const removeShipsPerson = (shipID) => {
    player1.gameboard.removeShip(shipID);
    player1.addShip(Number(shipID[7]));
  }

  const placeShipsAI = () => {
    while(player2.getShip() != 'No ship left.'){
      if(player2.gameboard.placeShip(AI.getRandomPosition(), AI.getRandomDirection(), player2.getShip()) === 
        "Ship is placed"){
          player2.dequeShip()
        }
    }
  }

  const attackPerson = (position) => {
    return player2.gameboard.receiveAttack(position);
  }

  const attackAI = () => {
    let attackPos = AI.getRandomPosition();
    if(!(player1.gameboard.isAvailableToHit(attackPos))){
      attackAI();
    }
    else{
      player1.gameboard.receiveAttack(attackPos)
      checkWinner();
      return;
    }
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

  return {
    placeShipsPerson,
    placeShipsAI,
    attackAI,
    checkWinner,
    removeShipsPerson,
    attackPerson,
    attackAI,
    player1,
    player2,
  };
};

export default Game;