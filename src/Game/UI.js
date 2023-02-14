import Game from "./Game";
import elements from "./DOM";

const {
  player1Info,
  player1Gameboard,
  player2Info,
  player2Gameboard,
  placementForm,
  placementBoard,
  approveBtn,
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
    for(let row = 0; row < UI.game.player1.gameboard.board.length; row++){
      for(let col = 0; col < UI.game.player1.gameboard.board.length; col++){
        let grid = document.createElement("div");
        grid.className = "grid";
        grid.id = `grid-${row}-${col}-P`;
        grid.addEventListener("click", () => {
          if (UI.game.placeShipsPerson([
              row,
              col,
              rotateBtn.getAttribute("data-direction")]) !== false) 
          {
            shipLengthInfo.textContent =
              UI.game.player1.getShip() instanceof Object
                ? UI.game.player1.getShip().length
                : UI.game.player1.getShip();
            if(!(UI.game.player1.getShip() instanceof Object)) approveBtn.removeAttribute('disabled');
          }
          UI.#updateBoard(placementBoard);
        });
        placementBoard.appendChild(grid);
      }
    }
    // can be add feature of removing placed ships
  }

  static initGameboards(){
    placementForm.style.display = 'none'

    UI.#createBoard(player1Gameboard, 'player1');
    UI.#createBoard(player2Gameboard, 'player2');
    UI.#updateBoard(player1Gameboard);
    UI.#updateBoard(player2Gameboard, 'player2');
    // every grid of player2 will have events(click) of: Gameboard.receivAttack, Game.attackAI, (maybe makeTurn), with this every attack of Person will be met with attack of AI(before attack of Aı and person, it should be checked if someone wins)
  }

  static #updateBoard(boardDiv, player = 'player1'){
    const children = boardDiv.children;
    const game = UI.game[`${player}`].gameboard.board;
    for (let child of children) {
      if (game[Number(child.id[5])][Number(child.id[7])] instanceof Object) {
        child.classList.add("ship");
      }
    }
  }

  static #createBoard(boardDiv, player = 'player1') {
    const gameboard = (player === 'player1') ? UI.game.player1.gameboard : UI.game.player2.gameboard;
    const className = (player === 'player1') ? "grid" : "grid AI-grid";
  
    for (let row = 0; row < gameboard.board.length; row++) {
      for (let col = 0; col < gameboard.board.length; col++) {
        let grid = document.createElement("div");
        grid.className = className;
        grid.id = `grid-${row}-${col}-G-${player.charAt(0)}`;
        boardDiv.appendChild(grid);
      }
    }
  }

  static initButtons(){
    UI.#initRotateButton();
    UI.#initApproveButton();
  }

  static #initRotateButton(){
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

  static #initApproveButton(){
    approveBtn.addEventListener("click", () => {
      UI.game.placeShipsAI();
      UI.initGameboards();
    });
  }
}