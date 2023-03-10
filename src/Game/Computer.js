import Player from "../modules/Player";

export default class Computer extends Player{
  getRandomPosition() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  getRandomDirection() {
    const dir = ["hor", "ver"];
    return dir[Math.floor(Math.random() * dir.length)];
  }
}
