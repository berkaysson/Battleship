import Game from "./Game";
import elements from "./DOM";

const {
  gameDiv,
  player1Info,
  player1Gameboard,
  player2Info,
  player2Gameboard,
  restartBtn,
  placementForm,
  placementBoard,
  placementInfo,
  approveBtn,
  rotateBtn,
  removeBtn,
  shipDirInfo,
  shipLengthInfo,
  modal,
  winModal,
  winnerModal,
  restartModalBtn,
  statsModal,
  infoBtn,
  infoModal,
  infoCloseBtn,
} = elements;

export default class UI {
  static game = Game();
  static placementMode = "place";

  static render() {
    UI.initPlacementBoard();
    UI.initButtons();
  }

  static initPlacementBoard() {
    for (let row = 0; row < UI.game.player1.gameboard.board.length; row++) {
      for (let col = 0; col < UI.game.player1.gameboard.board.length; col++) {
        let grid = document.createElement("div");
        grid.className = "grid";
        grid.id = `grid-${row}-${col}-P`;
        grid.addEventListener("click", () => {
          if (UI.placementMode === "place") UI.#placementHelper(row, col);
          else if (UI.placementMode === "remove")
            UI.#removeHelper(
              Array.from(grid.classList).find((cls) => cls.includes("ID"))
            );
        });
        grid.addEventListener("mouseover", () => {
          // hover effect
          if (UI.placementMode === "place")
            UI.#placementHoverHelper(row, col, "hover");
        });
        grid.addEventListener("mouseout", () => {
          if (UI.placementMode === "place")
            UI.#placementHoverHelper(row, col, "unhover");
        });

        placementBoard.appendChild(grid);
      }
    }
  }

  static #placementHelper(row, col) {
    if (
      UI.game.placeShipsPerson([
        row,
        col,
        rotateBtn.getAttribute("data-direction"),
      ]) !== false
    ) {
      UI.#infoDisplay();
      if (!(UI.game.player1.peekShip() instanceof Object))
        approveBtn.removeAttribute("disabled");
    }
    UI.#updateBoard(placementBoard);
  }

  static #placementHoverHelper(row, col, hover) {
    if (!(UI.game.player1.peekShip() instanceof Object)) return;
    const axis = rotateBtn.getAttribute("data-direction") === "ver" ? "x" : "y";
    const length = UI.game.player1.peekShip().length;

    for (let i = 0; i < length; i++) {
      const axisValue = axis === "x" ? row + i : col + i;
      const grid = document.getElementById(
        `grid-${axis === "x" ? axisValue : row}-${
          axis === "y" ? axisValue : col
        }-P`
      );
      if (grid) {
        if (hover === "hover") grid.classList.add("place");
        else grid.classList.remove("place");
      } else {
        if (hover === "hover")
          document
            .querySelectorAll(".place")
            .forEach((e) => e.classList.add("notplace"));
        else
          document
            .querySelectorAll(".notplace")
            .forEach((e) => e.classList.remove("notplace"));
      }
    }
  }

  static #removeHelper(shipID) {
    if (shipID === undefined) return;
    UI.game.removeShipsPerson(shipID);
    UI.#infoDisplay();
    approveBtn.setAttribute("disabled", "");
    UI.#updateBoard(placementBoard);
  }

  static initGameboards() {
    placementForm.style.display = "none";
    gameDiv.style.display = "grid";
    UI.#createBoard(player1Gameboard, "player1");
    UI.#createBoard(player2Gameboard, "player2");
    UI.#updateBoard(player1Gameboard, "player1");
    UI.#updateBoard(player2Gameboard, "player2");
  }

  static #updateBoard(boardDiv, player = "player1") {
    let children = boardDiv.children;
    let board_ = UI.game[`${player}`].gameboard.board;
    for (let child of children) {
      let [posX, posY] = UI.#getGridPosition(child);
      if (board_[posX][posY] instanceof Object && player === "player1") {
        child.classList.add("ship");
        child.classList.add(`${board_[posX][posY].getID()}`);
        if (child.classList.contains("place")) child.classList.remove("place");
        child.style.backgroundColor = board_[posX][posY].getColor();
      } else if (board_[posX][posY] == null) {
        child.setAttribute("class", "grid");
        child.style.backgroundColor = "";
      }
      if (board_[posX][posY] === "Hit!") {
        child.setAttribute("class", "grid hit");
        child.style.backgroundColor = "";
      } else if (board_[posX][posY] === "Miss!") {
        child.setAttribute("class", "grid miss");
        child.style.backgroundColor = "";
      }
    }
  }

  static #createBoard(boardDiv, player, className = "grid") {
    let gameboard =
      player === "player1"
        ? UI.game.player1.gameboard
        : UI.game.player2.gameboard;
    for (let row = 0; row < gameboard.board.length; row++) {
      for (let col = 0; col < gameboard.board.length; col++) {
        let grid = UI.#createGrid(row, col, player[6], className);
        if (player === "player2") {
          grid.addEventListener("click", () => {
            UI.#BoardAttackManager(grid);
          });
        }
        boardDiv.appendChild(grid);
      }
    }
  }

  static #BoardAttackManager(grid) {
    if (UI.game.attackPerson(UI.#getGridPosition(grid)) != false) {
      UI.game.attackAI();
    }
    if (UI.game.getisGameOver()) UI.#gameOver();
    UI.#updateBoard(player2Gameboard, "player2");
    UI.#updateBoard(player1Gameboard, "player1");
  }

  static #createGrid(row, col, player, className = "grid") {
    let grid = document.createElement("div");
    grid.className = className;
    grid.id = `grid-${row}-${col}-G-${player}`;
    return grid;
  }

  static #getGridPosition(grid) {
    return [Number(grid.id[5]), Number(grid.id[7])];
  }

  static #infoDisplay() {
    // shipLengthInfo.textContent =
    //   UI.game.player1.peekShip() instanceof Object
    //     ? UI.game.player1.peekShip().length
    //     : UI.game.player1.peekShip();
    if(UI.game.player1.peekShip() instanceof Object){
      placementInfo.style.display = 'inline-block';
      shipDirInfo.style.display = 'inline-block';
      shipLengthInfo.textContent = UI.game.player1.peekShip().length;
      shipDirInfo.textContent =  rotateBtn.getAttribute("data-direction") === 'hor' ? 'horizantally': 'vertically';
    }
    else{
      placementInfo.style.display = 'none';
      shipDirInfo.style.display = 'none';
      shipLengthInfo.textContent = `You placed all ships, start game by clicking Approve button.`;
    }
  }

  static initButtons() {
    UI.#initRotateButton();
    UI.#initApproveButton();
    UI.#initRemoveButton();
    UI.#initRestartButtons();
    UI.#initInfoButton();
    UI.#initCloseBtn();
  }

  static #initRotateButton() {
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

  static #initApproveButton() {
    approveBtn.addEventListener("click", () => {
      UI.game.placeShipsAI();
      UI.initGameboards();
    });
  }

  static #initRemoveButton() {
    removeBtn.addEventListener("click", () => {
      removeBtn.classList.toggle("active");
      if (removeBtn.textContent === "Remove Ship") {
        removeBtn.textContent = "Remove mode active";
        placementInfo.textContent = "Click ships to remove.";
        shipDirInfo.style.display = "none";
        shipLengthInfo.style.display = "none";
        UI.placementMode = "remove";
      } else if (removeBtn.textContent === "Remove mode active") {
        removeBtn.textContent = "Remove Ship";
        placementInfo.textContent = "Please place ship with this length and direction:";
        shipDirInfo.style.display = "inline-block";
        shipDirInfo.textContent =  rotateBtn.getAttribute("data-direction") === 'hor' ? 'horizantally': 'vertically';
        shipLengthInfo.style.display = "inline-block";
        UI.placementMode = "place";
      }
    });
  }

  static #initRestartButtons() {
    restartBtn.addEventListener("click", () => {
      UI.#restartGame();
    });

    restartModalBtn.addEventListener("click", () => {
      UI.#restartGame();
      modal.classList.remove("show");
    });
  }

  static #initInfoButton() {
    infoBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.classList.add("show");
        infoModal.style.display = "block";
      });
    });
  }

  static #initCloseBtn() {
    infoCloseBtn.addEventListener("click", () => {
      modal.classList.remove("show");
      infoModal.style.display = "none";
    });
  }

  static #gameOver() {
    modal.classList.add("show");
    winModal.style.display = "block";
    winnerModal.textContent = UI.game.getWinner();
  }

  static #restartGame() {
    UI.game = Game();
    UI.placementMode = "place";
    placementForm.style.display = "flex";
    gameDiv.style.display = "none";
    player1Gameboard.textContent = "";
    player2Gameboard.textContent = "";
    UI.#updateBoard(placementBoard);
    UI.#updateBoard(player1Gameboard, "player1");
    UI.#updateBoard(player2Gameboard, "player2");
    approveBtn.setAttribute("disabled", "");
    removeBtn.classList.remove("active");
    UI.#infoDisplay();
    winModal.style.display = "none";
  }
}
