import Gameboard from "./Gameboard";
import Ship from "./Ship";

const Player = () => {
  let gameboard = Gameboard(10); // gameboard size determined here
  let ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];

  function attack(enemy, hitPos) {
    if (checkEnemy(enemy)) {
      enemy.gameboard.receiveAttack(hitPos);
    } else return "Invalid Player.";
  }

  function checkWin(enemy) {
    if (checkEnemy(enemy)) {
      if (!enemy.gameboard.isShipLeft()) return true;
      else return false;
    } else return "Invalid Player.";
  }

  function peekShip() {
    if (ships.length === 0) return "No ship left.";
    ships = ships.sort((b, a) => a.length - b.length);
    return ships[0];
  }

  function dequeShip() {
    ships.shift();
  }

  function addShip(shipLength) {
    ships.unshift(Ship(shipLength));
  }

  function checkEnemy(enemy) {
    if (enemy instanceof Object) {
      return true;
    } else return false;
  }

  return {
    gameboard,
    attack,
    checkWin,
    peekShip,
    dequeShip,
    addShip,
  };
};

export default Player;
