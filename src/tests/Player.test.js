import Player from '../modules/Player';
import Ship from '../modules/Ship';

describe('Player', () => {
  let player;
  let enemy;
  let ship;
  let smallShip;

  beforeEach(() => {
    player = Player('player1');
    enemy = Player('player2')
    ship = Ship(5);
    smallShip = Ship(2);

    player.gameboard.placeShip([0,0], 'ver', ship);
    player.gameboard.placeShip([1,0], 'hor', smallShip);

    enemy.gameboard.placeShip([1,1], 'ver', ship);
    enemy.gameboard.placeShip([0,0], 'hor', smallShip);
  });

  test('attack method', () => {
    player.attack(enemy, [0,0]);
    expect(enemy.gameboard.board[0][0]).toBe('Hit!');
  });

  test('checkWin method', () => {
    player.attack(enemy, [0,0]);
    player.attack(enemy, [1,0]);
    expect(player.checkWin(enemy)).toBe(false);
    player.attack(enemy, [1,1]);
    player.attack(enemy, [1,2]);
    player.attack(enemy, [1,3]);
    player.attack(enemy, [1,4]);
    player.attack(enemy, [1,5]);
    expect(player.checkWin(enemy)).toBe(true);
  });

});