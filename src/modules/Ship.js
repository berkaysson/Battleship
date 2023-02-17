const Ship = (length) => {
  let hits = 0;
  const id = `shipID-${length}-${Date.now()}${Math.floor(Math.random() * 10)}`;

  return {
    hit: () => hits++,
    isSunk: () => hits === length,
    getID: () => id,
    length,
  };
};

export default Ship;
