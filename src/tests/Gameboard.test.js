import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";

describe('Ship', () => {
  let gameboard;
  let ship

  beforeEach(() => {
    gameboard = Gameboard(10);
    ship = Ship(4);
  });

  test('Creates 10x10 gameboard', () => {
    expect(gameboard.board.length).toBe(10);
  });

  test('Places a ship on the board', () => {
    gameboard.placeShip([1,1], [1,3], ship)
    expect(gameboard.board[1][1]).toBe(ship);
    expect(gameboard.board[1][2]).toBe(ship);
    expect(gameboard.board[1][3]).toBe(ship);
  });

});