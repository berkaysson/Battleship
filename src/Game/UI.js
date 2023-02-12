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
  static render(){  // it will be called in index.js when the page loaded
    UI.initPlacementBoard();
  }

  static initPlacementBoard(){  // should create gameboard 10x10
    for(let row = 0; row < 10; row++){
      for(let col = 0; col < 10; col++){
        let grid = document.createElement("div");
        grid.className = "grid";
        grid.id = `grid-${row}-${col}`;
        grid.addEventListener("click", () => {  // every grid must have event of UI.placeShip()
          Game.player1.gameboard.placeShip([row, col], 'hor', Game.ships[0]);
          UI.updateBoard()
        });
        placementBoard.appendChild(grid);
      }
    }
    // add a rotate button to choose placement will be 'ver' or 'hor'
    // later can be add feature of removing placed ships
    // add eventlistener to Approve button in placement modal, if all ships are placed correctly then approve button will be available
    // when clicked approve button call initGameboard()
  }

  static placeShip(target){
    // should take target and convert it a position (ex. [0, 0])
    // should check if target position available, if it is, will place ship to players gameboard (also will change that grids style), if not, will give a warning
  }

  static updateBoard(){
    //this will be called every move in both gameboard
    //should update board
    //can initGameboard() be used for this
  }

  static initGameboard(){
    // should init. gameboards acc to player 1 and player2
    // every grid of player2 will have events(click) of: Gameboard.receivAttack, Game.attackAI, (maybe makeTurn), with this every attack of Person will be met with attack of AI(before attack of Aı and person, it should be checked if someone wins)
    // every grid of board of player1 will have style acc to null or ship and also hit or miss
    // every grid of board of player2(AI) will have style acc to hit or miss
  }
}