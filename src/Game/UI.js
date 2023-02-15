import Game from "./Game";
import elements from "./DOM";

const {
  player1Info,
  player1Gameboard,
  player2Info,
  player2Gameboard,
  placementForm,
  placementBoard,
  placementInfo,
  approveBtn,
  rotateBtn,
  removeBtn,
  shipDirInfo,
  shipLengthInfo
} = elements;

export default class UI{
  static game = Game();
  static placementMode = 'place';

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
          if(UI.placementMode === 'place')  UI.#placementHelper(row, col);
          else if(UI.placementMode === 'remove') UI.#removeHelper(grid.classList[2]);
        });
        placementBoard.appendChild(grid);
      }
    }
  }

  static #placementHelper(row, col){
    if (UI.game.placeShipsPerson([
      row,
      col,
      rotateBtn.getAttribute("data-direction")]) !== false) {
      UI.#infoDisplay();
      if(!(UI.game.player1.getShip() instanceof Object)) approveBtn.removeAttribute('disabled');
  }
  UI.#updateBoard(placementBoard);
  }

  static #removeHelper(shipID){
    if(shipID === undefined) return;
    UI.game.removeShipsPerson(shipID);
    UI.#infoDisplay();
    approveBtn.setAttribute('disabled', '');
    UI.#updateBoard(placementBoard);
  }

  static initGameboards(){
    placementForm.style.display = 'none'
    UI.#createBoard(player1Gameboard, 'player1');
    UI.#createBoard(player2Gameboard, 'player2');
    UI.#updateBoard(player1Gameboard, 'player1');
    UI.#updateBoard(player2Gameboard, 'player2');
  }

  static #updateBoard(boardDiv, player = 'player1'){
    let children = boardDiv.children;
    let board_ = UI.game[`${player}`].gameboard.board;
    for (let child of children) {
      let [posX, posY] = UI.#getGridPosition(child)
      if (board_[posX][posY] instanceof Object) {
        child.classList.add('ship');
        child.classList.add(`${board_[posX][posY].getID()}`);
      }
      else if (board_[posX][posY] == null){
        child.setAttribute('class', 'grid');
      }
      if (board_[posX][posY] === 'Hit!'){
        child.setAttribute('class', 'grid hit');
      }
      else if (board_[posX][posY] === 'Miss!'){
        child.setAttribute('class', 'grid miss');
      }
    }
  }

  static #createBoard(boardDiv, player, className = "grid") {
    let gameboard = (player === 'player1') ? UI.game.player1.gameboard : UI.game.player2.gameboard;
    for (let row = 0; row < gameboard.board.length; row++) {
      for (let col = 0; col < gameboard.board.length; col++) {
        let grid = UI.#createGrid(row, col, player[6], className);
        if(player === 'player2'){
          grid.addEventListener('click', () =>{
            UI.#createBoardAttackHelper(grid);
          });
        }
        boardDiv.appendChild(grid);
      }
    }
  }

  static #createBoardAttackHelper(grid){
    UI.game.attackPerson(UI.#getGridPosition(grid));
    UI.#updateBoard(player2Gameboard, 'player2');
    UI.game.attackAI();
    UI.#updateBoard(player1Gameboard, 'player1');
  }

  static #createGrid(row, col, player, className = "grid") {
    let grid = document.createElement("div");
    grid.className = className;
    grid.id = `grid-${row}-${col}-G-${player}`;
    return grid;
  }

  static #getGridPosition(grid){
    return [Number(grid.id[5]), Number(grid.id[7])];
  }

  static #infoDisplay(){
    shipLengthInfo.textContent =
      UI.game.player1.getShip() instanceof Object
        ? UI.game.player1.getShip().length
        : UI.game.player1.getShip();
  }

  static initButtons(){
    UI.#initRotateButton();
    UI.#initApproveButton();
    UI.#initRemoveButton();
  }

  static #initRotateButton(){
    rotateBtn.addEventListener("click", () => {
      let currentDirection = rotateBtn.getAttribute("data-direction");
      if (currentDirection === "hor") {
        rotateBtn.setAttribute("data-direction", "ver");
        shipDirInfo.textContent = "Vertically"; // implement into infoDisplay method
      } else {
        rotateBtn.setAttribute("data-direction", "hor");
        shipDirInfo.textContent = "Horizantally"; // implement into infoDisplay method
      }
    });
  }

  static #initApproveButton(){
    approveBtn.addEventListener("click", () => {
      UI.game.placeShipsAI();
      UI.initGameboards();
    });
  }

  static #initRemoveButton(){
    removeBtn.addEventListener('click', () => {
      removeBtn.classList.toggle('active');
      if(removeBtn.textContent === 'Remove Ship'){
        removeBtn.textContent = 'Remove mode active';
        placementInfo.textContent = 'Click ships to remove.';
        shipDirInfo.style.display = 'none';
        shipLengthInfo.style.display = 'none';
        UI.placementMode = 'remove';
      } 
      else if(removeBtn.textContent === 'Remove mode active'){
        removeBtn.textContent = 'Remove Ship';
        placementInfo.textContent = 'Please place ship of this length :';
        shipDirInfo.style.display = 'inline-block';
        shipLengthInfo.style.display = 'inline-block';
        UI.placementMode = 'place';
      }
    });
  }
}