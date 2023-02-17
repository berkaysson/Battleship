/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Game/AI.js":
/*!************************!*\
  !*** ./src/Game/AI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AI)\n/* harmony export */ });\nclass AI{\r\n  static getRandomPosition(){\r\n    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];\r\n  }\r\n\r\n  static getRandomDirection(){\r\n    const dir = ['hor', 'ver'];\r\n    return dir[Math.floor(Math.random() * dir.length)];\r\n  }\r\n}\n\n//# sourceURL=webpack://battleship/./src/Game/AI.js?");

/***/ }),

/***/ "./src/Game/DOM.js":
/*!*************************!*\
  !*** ./src/Game/DOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  gameDiv: document.getElementById(\"game\"),\r\n  player1Info: document.getElementById(\"player1-info\"),\r\n  player1Gameboard: document.getElementById(\"player1-gameboard\"),\r\n  player2Info: document.getElementById(\"player2-info\"),\r\n  player2Gameboard: document.getElementById(\"player2-gameboard\"),\r\n  restartBtn:  document.getElementById(\"restart-btn\"),\r\n  placementForm: document.getElementById(\"placement-form\"),\r\n  placementBoard: document.getElementById(\"placement-board\"),\r\n  placementInfo: document.getElementById(\"placement-info\"),\r\n  approveBtn: document.getElementById(\"placement-approve-btn\"),\r\n  rotateBtn:  document.getElementById(\"rotate-placement-btn\"),\r\n  removeBtn:  document.getElementById(\"remove-placement-btn\"),\r\n  shipDirInfo: document.getElementById(\"ship-direction\"),\r\n  shipLengthInfo: document.getElementById(\"ship-length\"),\r\n  modal: document.getElementById(\"gameover-modal\"),\r\n  winnerModal: document.getElementById(\"winner\"),\r\n  restartModalBtn: document.getElementById(\"restart-modal-btn\"),\r\n  statsModal: document.getElementById(\"stats-modal\")\r\n});\n\n//# sourceURL=webpack://battleship/./src/Game/DOM.js?");

/***/ }),

/***/ "./src/Game/Game.js":
/*!**************************!*\
  !*** ./src/Game/Game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Ship */ \"./src/modules/Ship.js\");\n/* harmony import */ var _modules_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Player */ \"./src/modules/Player.js\");\n/* harmony import */ var _AI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AI */ \"./src/Game/AI.js\");\n\r\n\r\n\r\n\r\nconst Game = () => {\r\n  let player1 = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  let player2 = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  let isGameOver = false;\r\n  let winner = '';\r\n\r\n  const placeShipsPerson = (pos) => {\r\n    if (\r\n      player1.gameboard.placeShip([pos[0], pos[1]], pos[2], player1.getShip()) ===\r\n      \"Ship is placed\"\r\n    ) {\r\n      player1.dequeShip();\r\n    }\r\n  }\r\n\r\n  const removeShipsPerson = (shipID) => {\r\n    player1.gameboard.removeShip(shipID);\r\n    player1.addShip(Number(shipID[7]));\r\n  }\r\n\r\n  const placeShipsAI = () => {\r\n    while(player2.getShip() != 'No ship left.'){\r\n      if(player2.gameboard.placeShip(_AI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getRandomPosition(), _AI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getRandomDirection(), player2.getShip()) === \r\n        \"Ship is placed\"){\r\n          player2.dequeShip()\r\n        }\r\n    }\r\n  }\r\n\r\n  const attackPerson = (position) => {\r\n    checkWinner();\r\n    if(isGameOver === true) return;\r\n    return player2.gameboard.receiveAttack(position);\r\n  }\r\n\r\n  const attackAI = () => {\r\n    let attackPos = _AI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getRandomPosition();\r\n    if(!(player1.gameboard.isAvailableToHit(attackPos))){\r\n      attackAI();\r\n    }\r\n    else{\r\n      checkWinner();\r\n      if(isGameOver === true) return;\r\n      player1.gameboard.receiveAttack(attackPos)\r\n      return;\r\n    }\r\n  }\r\n\r\n  const checkWinner = () => {\r\n    if (player1.checkWin(player2)) {\r\n      winner = 'Player 1';\r\n      isGameOver = true \r\n    } else if (player2.checkWin(player1)) {\r\n      winner = 'Computer';\r\n      isGameOver = true ;\r\n    } else {\r\n      isGameOver = false; \r\n    }\r\n  }\r\n\r\n  const getisGameOver = () => {\r\n    return isGameOver;\r\n  }\r\n\r\n  const getWinner = () => {\r\n    return winner;\r\n  }\r\n\r\n  return {\r\n    placeShipsPerson,\r\n    placeShipsAI,\r\n    attackAI,\r\n    checkWinner,\r\n    removeShipsPerson,\r\n    attackPerson,\r\n    attackAI,\r\n    getisGameOver,\r\n    getWinner,\r\n    player1,\r\n    player2,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://battleship/./src/Game/Game.js?");

/***/ }),

/***/ "./src/Game/UI.js":
/*!************************!*\
  !*** ./src/Game/UI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game/Game.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/Game/DOM.js\");\n\r\n\r\n\r\nconst {\r\n  gameDiv,\r\n  player1Info,\r\n  player1Gameboard,\r\n  player2Info,\r\n  player2Gameboard,\r\n  restartBtn,\r\n  placementForm,\r\n  placementBoard,\r\n  placementInfo,\r\n  approveBtn,\r\n  rotateBtn,\r\n  removeBtn,\r\n  shipDirInfo,\r\n  shipLengthInfo,\r\n  modal,\r\n  winnerModal,\r\n  restartModalBtn,\r\n  statsModal,\r\n} = _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\r\nclass UI{\r\n  static game = (0,_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  static placementMode = 'place';\r\n\r\n  static render(){\r\n    UI.initPlacementBoard();\r\n    UI.initButtons();\r\n  }\r\n\r\n  static initPlacementBoard(){\r\n    for(let row = 0; row < UI.game.player1.gameboard.board.length; row++){\r\n      for(let col = 0; col < UI.game.player1.gameboard.board.length; col++){\r\n        let grid = document.createElement(\"div\");\r\n        grid.className = \"grid\";\r\n        grid.id = `grid-${row}-${col}-P`;\r\n        grid.addEventListener(\"click\", () => {\r\n          if(UI.placementMode === 'place')  UI.#placementHelper(row, col);\r\n          else if(UI.placementMode === 'remove') UI.#removeHelper(Array.from(grid.classList).find(cls => cls.includes('ID')));\r\n        });\r\n        grid.addEventListener('mouseover', () => {  // hover effect\r\n          if(UI.placementMode === 'place') UI.#placementHoverHelper(row, col, 'hover');\r\n          \r\n        });\r\n        grid.addEventListener('mouseout', () => {\r\n          if(UI.placementMode === 'place') UI.#placementHoverHelper(row, col, 'unhover');\r\n        });\r\n\r\n        placementBoard.appendChild(grid);\r\n      }\r\n    }\r\n  }\r\n\r\n  static #placementHelper(row, col){\r\n    if (UI.game.placeShipsPerson([\r\n      row,\r\n      col,\r\n      rotateBtn.getAttribute(\"data-direction\")]) !== false) {\r\n      UI.#infoDisplay();\r\n      if(!(UI.game.player1.getShip() instanceof Object)) approveBtn.removeAttribute('disabled');\r\n  }\r\n  UI.#updateBoard(placementBoard);\r\n  }\r\n\r\n  static #placementHoverHelper(row, col, hover){\r\n    if (!(UI.game.player1.getShip() instanceof Object)) return;\r\n    const axis = rotateBtn.getAttribute(\"data-direction\") === 'ver' ? 'x' : 'y';\r\n    const length = UI.game.player1.getShip().length;\r\n\r\n    for (let i = 0; i < length; i++) {\r\n    const axisValue = axis === 'x' ? row + i : col + i;\r\n    const grid = document.getElementById(`grid-${axis === 'x' ? axisValue : row}-${axis === 'y' ? axisValue : col}-P`);\r\n    if (grid) {\r\n      if (hover === 'hover') grid.classList.add('place');\r\n      else grid.classList.remove('place');\r\n    } else {\r\n      if(hover === 'hover') document.querySelectorAll('.place').forEach((e) => e.classList.add('notplace'));\r\n      else document.querySelectorAll('.notplace').forEach((e) => e.classList.remove('notplace'));\r\n    }\r\n    }\r\n  }\r\n\r\n  static #removeHelper(shipID){\r\n    if(shipID === undefined) return;\r\n    UI.game.removeShipsPerson(shipID);\r\n    UI.#infoDisplay();\r\n    approveBtn.setAttribute('disabled', '');\r\n    UI.#updateBoard(placementBoard);\r\n  }\r\n\r\n  static initGameboards(){\r\n    placementForm.style.display = 'none';\r\n    gameDiv.style.display = 'grid';\r\n    UI.#createBoard(player1Gameboard, 'player1');\r\n    UI.#createBoard(player2Gameboard, 'player2');\r\n    UI.#updateBoard(player1Gameboard, 'player1');\r\n    UI.#updateBoard(player2Gameboard, 'player2');\r\n  }\r\n\r\n  static #updateBoard(boardDiv, player = 'player1'){\r\n    let children = boardDiv.children;\r\n    let board_ = UI.game[`${player}`].gameboard.board;\r\n    for (let child of children) {\r\n      let [posX, posY] = UI.#getGridPosition(child)\r\n      if (board_[posX][posY] instanceof Object && player === 'player1') {\r\n        child.classList.add('ship');\r\n        child.classList.add(`${board_[posX][posY].getID()}`);\r\n        if(child.classList.contains('place')) child.classList.remove('place');\r\n      }\r\n      else if (board_[posX][posY] == null){\r\n        child.setAttribute('class', 'grid');\r\n      }\r\n      if (board_[posX][posY] === 'Hit!'){\r\n        child.setAttribute('class', 'grid hit');\r\n      }\r\n      else if (board_[posX][posY] === 'Miss!'){\r\n        child.setAttribute('class', 'grid miss');\r\n      }\r\n    }\r\n  }\r\n\r\n  static #createBoard(boardDiv, player, className = \"grid\") {\r\n    let gameboard = (player === 'player1') ? UI.game.player1.gameboard : UI.game.player2.gameboard;\r\n    for (let row = 0; row < gameboard.board.length; row++) {\r\n      for (let col = 0; col < gameboard.board.length; col++) {\r\n        let grid = UI.#createGrid(row, col, player[6], className);\r\n        if(player === 'player2'){\r\n          grid.addEventListener('click', () =>{\r\n            UI.#BoardAttackManager(grid);\r\n          });\r\n        }\r\n        boardDiv.appendChild(grid);\r\n      }\r\n    }\r\n  }\r\n\r\n  static #BoardAttackManager(grid){\r\n    if((UI.game.attackPerson(UI.#getGridPosition(grid))) != false){\r\n      UI.game.attackAI();\r\n    }\r\n    if(UI.game.getisGameOver()) UI.#gameOver();\r\n    UI.#updateBoard(player2Gameboard, 'player2');\r\n    UI.#updateBoard(player1Gameboard, 'player1');\r\n  }\r\n\r\n  static #createGrid(row, col, player, className = \"grid\") {\r\n    let grid = document.createElement(\"div\");\r\n    grid.className = className;\r\n    grid.id = `grid-${row}-${col}-G-${player}`;\r\n    return grid;\r\n  }\r\n\r\n  static #getGridPosition(grid){\r\n    return [Number(grid.id[5]), Number(grid.id[7])];\r\n  }\r\n\r\n  static #infoDisplay(){\r\n    shipLengthInfo.textContent =\r\n      UI.game.player1.getShip() instanceof Object\r\n        ? UI.game.player1.getShip().length\r\n        : UI.game.player1.getShip();\r\n  }\r\n\r\n  static initButtons(){\r\n    UI.#initRotateButton();\r\n    UI.#initApproveButton();\r\n    UI.#initRemoveButton();\r\n    UI.#initRestartButtons();\r\n  }\r\n\r\n  static #initRotateButton(){\r\n    rotateBtn.addEventListener(\"click\", () => {\r\n      let currentDirection = rotateBtn.getAttribute(\"data-direction\");\r\n      if (currentDirection === \"hor\") {\r\n        rotateBtn.setAttribute(\"data-direction\", \"ver\");\r\n        shipDirInfo.textContent = \"Vertically\"; // implement into infoDisplay method\r\n      } else {\r\n        rotateBtn.setAttribute(\"data-direction\", \"hor\");\r\n        shipDirInfo.textContent = \"Horizantally\"; // implement into infoDisplay method\r\n      }\r\n    });\r\n  }\r\n\r\n  static #initApproveButton(){\r\n    approveBtn.addEventListener(\"click\", () => {\r\n      UI.game.placeShipsAI();\r\n      UI.initGameboards();\r\n    });\r\n  }\r\n\r\n  static #initRemoveButton(){\r\n    removeBtn.addEventListener('click', () => {\r\n      removeBtn.classList.toggle('active');\r\n      if(removeBtn.textContent === 'Remove Ship'){\r\n        removeBtn.textContent = 'Remove mode active';\r\n        placementInfo.textContent = 'Click ships to remove.';\r\n        shipDirInfo.style.display = 'none';\r\n        shipLengthInfo.style.display = 'none';\r\n        UI.placementMode = 'remove';\r\n      } \r\n      else if(removeBtn.textContent === 'Remove mode active'){\r\n        removeBtn.textContent = 'Remove Ship';\r\n        placementInfo.textContent = 'Please place ship of this length :';\r\n        shipDirInfo.style.display = 'inline-block';\r\n        shipLengthInfo.style.display = 'inline-block';\r\n        UI.placementMode = 'place';\r\n      }\r\n    });\r\n  }\r\n\r\n  static #initRestartButtons(){\r\n    restartBtn.addEventListener('click', () => {\r\n      UI.#restartGame();\r\n    });\r\n\r\n    restartModalBtn.addEventListener('click', () => {\r\n      UI.#restartGame();\r\n      modal.classList.remove('show');\r\n    });\r\n  }\r\n\r\n  static #gameOver(){\r\n    modal.classList.add('show');\r\n    winnerModal.textContent = UI.game.getWinner();\r\n  }\r\n\r\n  static #restartGame(){\r\n    UI.game = (0,_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    UI.placementMode = 'place';\r\n    placementForm.style.display = 'flex';\r\n    gameDiv.style.display = 'none';\r\n    player1Gameboard.textContent = '';\r\n    player2Gameboard.textContent = '';\r\n    UI.#updateBoard(placementBoard);\r\n    UI.#updateBoard(player1Gameboard, 'player1');\r\n    UI.#updateBoard(player2Gameboard, 'player2');\r\n    approveBtn.setAttribute('disabled', '');\r\n    removeBtn.classList.remove('active');\r\n    UI.#infoDisplay();\r\n  }\r\n}\n\n//# sourceURL=webpack://battleship/./src/Game/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game/UI */ \"./src/Game/UI.js\");\n\r\n\r\n_Game_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Gameboard = (size) => {\r\n  let board = createBoard(size); // 10x10 gameboard\r\n\r\n  function placeShip(startPos, dir, ship) {\r\n    const endPos = getEndPosition(startPos, dir, ship.length);\r\n    if (isAvailableToPlace(startPos, endPos)) {\r\n      for (let x = startPos[0]; x <= endPos[0]; x++) {\r\n        for (let y = startPos[1]; y <= endPos[1]; y++) {\r\n          board[x][y] = ship;\r\n        }\r\n      }\r\n      return 'Ship is placed';\r\n    } else {\r\n      return \"Invalid position.\";\r\n    }\r\n  }\r\n\r\n  function receiveAttack(hitPos) {\r\n    if (isInBoard(hitPos)) {\r\n      if (board[hitPos[0]][hitPos[1]] === \"Hit!\" || board[hitPos[0]][hitPos[1]] === \"Miss!\")\r\n        return false;\r\n      else if (board[hitPos[0]][hitPos[1]] instanceof Object) {\r\n        board[hitPos[0]][hitPos[1]].hit();\r\n        if (board[hitPos[0]][hitPos[1]].isSunk()) {\r\n          board[hitPos[0]][hitPos[1]] = \"Hit!\";\r\n          return \"Ship Sunk!\";\r\n        }\r\n        board[hitPos[0]][hitPos[1]] = \"Hit!\";\r\n      } else if (board[hitPos[0]][hitPos[1]] == null) {\r\n        board[hitPos[0]][hitPos[1]] = \"Miss!\";\r\n      }\r\n    } else return false;\r\n  }\r\n\r\n  function removeShip(shipID){\r\n    for (let x = 0; x < board.length; x++) {\r\n      for (let y = 0; y < board.length; y++) {\r\n        if(board[x][y] instanceof Object){\r\n          if (board[x][y].getID() === shipID) {\r\n            board[x][y] = null;\r\n          }\r\n        }\r\n      }\r\n    }\r\n    return false;\r\n  }\r\n\r\n  function isShipLeft() {\r\n    for (let x = 0; x < board.length; x++) {\r\n      for (let y = 0; y < board.length; y++) {\r\n        if (board[x][y] instanceof Object) {\r\n          return true;\r\n        } // board[x][y] should be equal to a Ship instaces, find a way to check it\r\n      }\r\n    }\r\n    return false;\r\n  }\r\n\r\n  function isInBoard(position) {\r\n    if (\r\n      position[0] < 0 ||\r\n      position[1] < 0 ||\r\n      position[0] > board.length -1 ||\r\n      position[1] > board.length -1\r\n    ) {\r\n      return false;\r\n    }\r\n    return true;\r\n  }\r\n\r\n  function isEmpty(position) {\r\n    if (board[position[0]][position[1]] == null) return true;\r\n    else return false;\r\n  }\r\n\r\n  function isAvailableToPlace(startPos, endPos) {\r\n    if (isInBoard(startPos) && isInBoard(endPos)) {\r\n      for (let x = startPos[0]; x <= endPos[0]; x++) {\r\n        for (let y = startPos[1]; y <= endPos[1]; y++) {\r\n          if (!isEmpty([x, y])) return false;\r\n        }\r\n      }\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  function isAvailableToHit(position){\r\n    if(board[position[0]][position[1]] !== 'Hit!' && board[position[0]][position[1]] !== 'Miss!')\r\n      return true;\r\n    else return false;\r\n  }\r\n\r\n  function getEndPosition(startPos, dir, distance){\r\n    let endPos;\r\n    if (dir === \"hor\") endPos = [startPos[0], startPos[1] + distance - 1];\r\n    else if (dir === \"ver\")\r\n      endPos = [startPos[0] + distance - 1, startPos[1]];\r\n    else return false;\r\n\r\n    return endPos\r\n  }\r\n\r\n  return {\r\n    board,\r\n    placeShip,\r\n    receiveAttack,\r\n    isShipLeft,\r\n    isInBoard,\r\n    isEmpty,\r\n    getEndPosition,\r\n    removeShip,\r\n    isAvailableToHit\r\n  };\r\n};\r\n\r\nfunction createBoard(size) {\r\n  if (typeof size !== \"number\") return \"Size must be number.\";\r\n\r\n  let board = [];\r\n  for (let i = 0; i < size; i++) {\r\n    let row = [];\r\n    for (let j = 0; j < size; j++) {\r\n      row.push(null);\r\n    }\r\n    board.push(row);\r\n  }\r\n  return board;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/modules/Gameboard.js?");

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/modules/Gameboard.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n\r\n\r\n\r\nconst Player = () => {\r\n  let gameboard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(10);  // gameboard size idetifier\r\n  let ships = [(0,_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(5), (0,_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(4), (0,_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3), (0,_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3), (0,_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(2)];\r\n\r\n  function attack(enemy, hitPos){\r\n    if(checkEnemy(enemy)){\r\n      enemy.gameboard.receiveAttack(hitPos);\r\n    }\r\n    else return 'Invalid Player.'\r\n  }\r\n\r\n  function checkWin(enemy){\r\n    if(checkEnemy(enemy)){\r\n      if(!enemy.gameboard.isShipLeft()) return true;\r\n      else return false;\r\n    }\r\n    else return 'Invalid Player.'\r\n  }\r\n\r\n  function getShip(){\r\n    if(ships.length === 0) return 'No ship left.';\r\n    ships = ships.sort((b, a) => a.length - b.length);\r\n    return ships[0];\r\n  }\r\n\r\n  function dequeShip(){\r\n    ships.shift();\r\n  }\r\n\r\n  function addShip(shipLength){\r\n    ships.unshift((0,_Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shipLength));\r\n  }\r\n\r\n  function checkEnemy(enemy){\r\n    if(enemy instanceof Object){  // find a way to check 'enemy' is a Player\r\n      return true\r\n    }\r\n    else return false\r\n  }\r\n\r\n  return {\r\n    gameboard,\r\n    attack,\r\n    checkWin,\r\n    getShip,\r\n    dequeShip,\r\n    addShip\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/modules/Player.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length) => {\r\n  let hits = 0;\r\n  const id = `shipID-${length}-${Date.now()}${Math.floor(Math.random() * 10)}`\r\n\r\n  return {\r\n    hit: () => hits++,\r\n    isSunk: () => hits === length,\r\n    getID: () => id,\r\n    length,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/Ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;