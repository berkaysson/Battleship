import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";

describe("Ship", () => {
  let gameboard;
  let ship;
  let smallShip;

  beforeEach(() => {
    gameboard = Gameboard(10);
    ship = Ship(3);
    smallShip = Ship(2);
  });

  test("Creates 10x10 gameboard", () => {
    expect(gameboard.board.length).toBe(10);
  });

  test("Places a ship on the board", () => {
    gameboard.placeShip([1, 1], "ver", ship);
    expect(gameboard.board[1][1]).toBe(ship);
    expect(gameboard.board[1][2]).toBe(ship);
    expect(gameboard.board[1][3]).toBe(ship);
    gameboard.placeShip([0, 0], "hor", smallShip);
    expect(gameboard.board[0][0]).toBe(smallShip);
    expect(gameboard.board[1][0]).toBe(smallShip);
  });

  test("Places ship out of gameboard", () => {
    expect(gameboard.placeShip([11, 1], "ver", ship)).toBe("Invalid position.");
  });

  test("Places a ship that already used", () => {
    gameboard.placeShip([1, 1], "ver", ship);
    expect(gameboard.placeShip([1, 1], "ver", smallShip)).toBe(
      "The position is used."
    );
  });

  test("returns false when all adjacent grids are empty", () => {
    const gameboard = Gameboard(5);
    expect(gameboard.checkAdjacentGridsForPlace([2, 2])).toBe(false);
  });

  test("returns true when an adjacent grid is occupied by a ship", () => {
    const gameboard = Gameboard(5);
    gameboard.placeShip([2, 1], "hor", Ship(3));
    expect(gameboard.checkAdjacentGridsForPlace([2, 2])).toBe(true);
  });

  test("returns true when multiple adjacent grids are occupied by a ship", () => {
    const gameboard = Gameboard(5);
    gameboard.placeShip([2, 1], "hor", Ship(3));
    gameboard.placeShip([3, 3], "ver", Ship(2));
    expect(gameboard.checkAdjacentGridsForPlace([2, 2])).toBe(true);
    expect(gameboard.checkAdjacentGridsForPlace([1, 3])).toBe(true);
  });

  test("returns false when a grid is out of bounds", () => {
    const gameboard = Gameboard(5);
    expect(gameboard.checkAdjacentGridsForPlace([-1, 2])).toBe(undefined);
    expect(gameboard.checkAdjacentGridsForPlace([2, 5])).toBe(undefined);
  });

  test("receiveAttack to outside of gameboard", () => {
    expect(gameboard.receiveAttack([-1, 0])).toBe("Invalid position.");
  });

  test("receiveAttack to empty grid", () => {
    gameboard.placeShip([0, 0], "ver", ship);
    gameboard.receiveAttack([1, 0]);
    expect(gameboard.board[1][0]).toBe("Miss!");
  });

  test("receiveAttack to a ship", () => {
    gameboard.placeShip([0, 0], "ver", ship);
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.board[0][0]).toBe("Hit!");
    gameboard.receiveAttack([0, 1]);
    expect(gameboard.board[0][1]).toBe("Hit!");
    gameboard.receiveAttack([0, 2]);
    expect(gameboard.board[0][2]).toBe("Hit!");
  });

  test("receiveAttack to a hitted grid", () => {
    gameboard.placeShip([0, 0], "ver", ship);
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.receiveAttack([0, 0])).toBe(
      "This position has been hitted."
    );
  });

  test("receiveAttack and checks the ship is sunk", () => {
    gameboard.placeShip([0, 0], "ver", ship);
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    expect(gameboard.receiveAttack([0, 2])).toBe("Ship Sunk!");
    expect(ship.isSunk()).toBe(true);
  });

  test("isShipLeft test", () => {
    gameboard.placeShip([0, 0], "ver", ship);
    gameboard.placeShip([3, 3], "hor", smallShip);
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.isShipLeft()).toBe(true);
    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([0, 2]);
    expect(gameboard.isShipLeft()).toBe(true);
    gameboard.receiveAttack([3, 3]);
    gameboard.receiveAttack([4, 3]);
    expect(gameboard.isShipLeft()).toBe(false);
  });
});
