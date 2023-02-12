import Game from "./Game";
import elements from "./DOM";

const {
  player1Info,
  player1Gameboard,
  player2Info,
  player2Gameboard,
  placementBoard,
  placementBtn,
  rotateBtn,
  shipDirInfo,
  shipLengthInfo
} = elements;

export default class UI{
  static game = Game();
  

  static render(){
    UI.initPlacementBoard();
    UI.initButtons();
  }

  static initPlacementBoard(){
    for(let row = 0; row < 10; row++){
      for(let col = 0; col < 10; col++){
        let grid = document.createElement("div");
        grid.className = "grid";
        grid.id = `grid-${row}-${col}`;
        grid.addEventListener("click", () => {
          if (UI.game.placeShipsPerson([
              row,
              col,
              rotateBtn.getAttribute("data-direction")]) !== false) 
          {
            if(UI.game.currentShipLength()) shipLengthInfo.textContent = UI.game.currentShipLength();
          }
          UI.updateBoard(placementBoard);
        });
        placementBoard.appendChild(grid);
      }
    }
    // later can be add feature of removing placed ships
    // add eventlistener to Approve button in placement modal, if all ships are placed correctly then approve button will be available
    // when clicked approve button call initGameboard(), when clicked approvebutton also AI should place its ships
  }

  static updateBoard(boardDiv){
    const children = boardDiv.children;
    for (let child of children) {
      if (
        UI.game.player1.gameboard.board[Number(child.id[5])][Number(child.id[7])] instanceof Object) {
        child.classList.add("ship");
      }
    }
  }

  static initGameboard(){
    // should init. gameboards acc to player 1 and player2
    // every grid of player2 will have events(click) of: Gameboard.receivAttack, Game.attackAI, (maybe makeTurn), with this every attack of Person will be met with attack of AI(before attack of Aı and person, it should be checked if someone wins)
    // every grid of board of player1 will have style acc to null or ship and also hit or miss
    // every grid of board of player2(AI) will have style acc to hit or miss
  }

  static initButtons(){
    rotateBtn.addEventListener("click", () => {
      let currentDirection = rotateBtn.getAttribute("data-direction");
      if (currentDirection === "hor") {
        rotateBtn.setAttribute("data-direction", "ver");
        shipDirInfo.textContent = "Vertically";
      } else {
        rotateBtn.setAttribute("data-direction", "hor");
        shipDirInfo.textContent = "Horizantally";
      }
    });
  }
}