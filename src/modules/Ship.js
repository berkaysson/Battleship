const Ship = (length) => {
  let hits = 0;
  const id = `shipID-${length}-${Math.floor(Math.random() * 10000)}`;
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${
    Math.floor(Math.random() * 256)
  }, ${Math.floor(Math.random() * 256)})`;

  return {
    hit: () => hits++,
    isSunk: () => hits === length,
    getID: () => id,
    getColor: () => color,
    length,
  };
};

export default Ship;
