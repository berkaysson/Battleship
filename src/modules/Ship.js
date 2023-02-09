const Ship = (length) => {
    let hits = 0;
    
    return {
      hit: () => hits++,
      isSunk: () => hits === length,
      length
    };
};

export default Ship;