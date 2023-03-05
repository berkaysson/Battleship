export default class AI {
  static getRandomPosition() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  static getRandomDirection() {
    const dir = ["hor", "ver"];
    return dir[Math.floor(Math.random() * dir.length)];
  }
}
