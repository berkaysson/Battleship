import Game from "./Game";
import elements from "./DOM"

const {
  player1Info,
  player1Gameboard,
  player2Info,
  player2Gameboard,
  placementBoard,
  placementBtn,
} = elements;

export default class UI{
  static render(){
    UI.initPlacementBoard();
    UI.gameboardLoader();
  }

  static initPlacementBoard(){  // should create gameboard by player1.gameboard.board
    for(let row = 0; row < 10; row++){
      for(let col = 0; col < 10; col++){
        let grid = document.createElement("div");
        grid.className = "grid";
        grid.id = `grid-${row}-${col}`;
        grid.addEventListener("click", () => {
          Game.player1.gameboard.placeShip([row, col], 'hor', Game.ships[0]);
        });
        placementBoard.appendChild(grid);
      }
    }
  }

  static gameboardLoader(){
    
  }
}