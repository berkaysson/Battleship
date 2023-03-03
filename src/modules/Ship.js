const Ship = (length) => {
  let hits = 0;
  const id = `shipID-${Math.floor(Math.random() * 10000)}`;

  return {
    hit: () => hits++,
    isSunk: () => hits === length,
    getID: () => id,
    length,
  };
};

export default Ship;
