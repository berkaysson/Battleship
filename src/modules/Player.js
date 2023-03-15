import Gameboard from "./Gameboard";
import Ship from "./Ship";

class Player {
  constructor() {
    this.gameboard = Gameboard(10);
    this.ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
  }

  attack(enemy, hitPos) {
    if (this.checkEnemy(enemy)) {
      enemy.gameboard.receiveAttack(hitPos);
    } else {
      return "Invalid Player.";
    }
  }

  peekShip() {
    if (this.ships.length === 0) {
      return "No ship left.";
    }
    this.ships = this.ships.sort((b, a) => a.length - b.length);
    return this.ships[0];
  }

  dequeShip() {
    this.ships.shift();
  }

  addShip(shipLength) {
    this.ships.unshift(Ship(shipLength));
  }
}

export default Player;
