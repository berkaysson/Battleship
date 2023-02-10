import Gameboard from "./Gameboard"

const Player = (name) => {
  let gameboard = Gameboard(10);

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

  function checkEnemy(enemy){
    if(enemy instanceof Object){  // find a way to check 'enemy' is a Player
      return true
    }
    else return false
  }

  return {
    gameboard,
    name,
    attack,
    checkWin
  };
}

export default Player;