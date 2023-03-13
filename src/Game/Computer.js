import Player from "../modules/Player";

export default class Computer extends Player{
  constructor(){
    super();
    this.firstHit = null;
    this.currentHit = null;
    this.detectedShipsID = new Set(); // if ships adjacently placed, this set will be used
    this.nextFirstHits = [];
  }

  getAttackPosition(opponentBoard){  // eventually will return position like [x, y]
    let attackPos;
    if(this.firstHit === null) {  // attacks randomly
      return this.#attackRandomly(opponentBoard);
    }
    else{ //attacks by chasing ship
      let possiblePositions = this.createPossibleHitPositions(opponentBoard)
      if(possiblePositions.length>0){
        return this.#attackSmartly(possiblePositions.shift(), opponentBoard);
      }
      else{ // if there is no possible hit for current hit
        if(this.detectedShipsID.size > 0){  // goes back to firstHit
          this.currentHit = this.firstHit;
          return this.getAttackPosition(opponentBoard);
        }
        else{   // goes back to attackRandomly
          this.firstHit = null;
          this.currentHit = null;
          return this.getAttackPosition(opponentBoard);
        }
      }
    }
  }

  #attackRandomly(opponentBoard){
    let attackPos;
    do {
      attackPos = this.getRandomPosition();
      if(opponentBoard.board[attackPos[0]][attackPos[1]] instanceof Object){
        this.firstHit = attackPos;
        this.currentHit = attackPos;
        this.detectedShipsID.add(opponentBoard.board[attackPos[0]][attackPos[1]].getID());
      }
    } while (!opponentBoard.isAvailableToHit(attackPos));
    return attackPos;
  }

  #attackSmartly(possiblePosition, opponentBoard){
    if(opponentBoard.board[possiblePosition[0]][possiblePosition[1]] instanceof Object){
      this.currentHit = possiblePosition;
      if(opponentBoard.board[possiblePosition[0]][possiblePosition[1]].willSunk()){
        this.detectedShipsID.delete(opponentBoard.board[possiblePosition[0]][possiblePosition[1]].getID());
      }
    }
    return possiblePosition;
  }

  getRandomPosition() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  getRandomDirection() {
    const dir = ["hor", "ver"];
    return dir[Math.floor(Math.random() * dir.length)];
  }

  createPossibleHitPositions(board, currentHit = this.currentHit) {
    let possibleHitPositions = [];

    let pos = [currentHit[0] - 1, currentHit[1]];
    if (board.isAvailableToHit(pos)) {
      possibleHitPositions.push(pos);
    }

    pos = [currentHit[0] + 1, currentHit[1]];
    if (board.isAvailableToHit(pos)) {
      possibleHitPositions.push(pos);
    }

    pos = [currentHit[0], currentHit[1] - 1];
    if (board.isAvailableToHit(pos)) {
      possibleHitPositions.push(pos);
    }

    pos = [currentHit[0], currentHit[1] + 1]
    if (board.isAvailableToHit(pos)) {
      possibleHitPositions.push(pos);
    }

    return possibleHitPositions.sort(() => Math.random() - 0.5);  // randomly shuffles array
  }
}
