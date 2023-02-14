import Gameboard from "./Gameboard"
import Ship from "./Ship";

const Player = () => {
  let gameboard = Gameboard(10);  // gameboard size idetifier
  let ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];

  function attack(enemy, hitPos){
    if(checkEnemy(enemy)){
      enemy.gameboard.receiveAttack(hitPos);
    }
    else return 'Invalid Player.'
  }

  function checkWin(enemy){
    if(checkEnemy(enemy)){
      if(!enemy.gameboard.isShipLeft()) return true;
      else return false;
    }
    else return 'Invalid Player.'
  }

  function getShip(){
    if(ships.length === 0) return 'No ship left.';
    return ships[0];
  }

  function dequeShip(){
    ships.shift();
  }

  function checkEnemy(enemy){
    if(enemy instanceof Object){  // find a way to check 'enemy' is a Player
      return true
    }
    else return false
  }

  return {
    gameboard,
    attack,
    checkWin,
    getShip,
    dequeShip
  };
}

export default Player;