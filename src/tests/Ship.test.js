import Ship from "../Ship";

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  it('should have the correct length', () => {
    expect(ship.length).toBe(3);
  });

  it('should not be sunk initially', () => {
    expect(ship.isSunk()).toBe(false);
  });

  it('should register hits correctly', () => {
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  it('should become sunk after enough hits', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});