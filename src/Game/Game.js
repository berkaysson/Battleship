import Ship from '../modules/Ship';
import Player from '../modules/Player';

export default class Game { // can be make this a factory function
  constructor(){
    this.player1 = Player();  // Person
    this.player2 = Player();  // AI
    this.turn = 0;
    this.isGameOver = false;
    this.winner = '';
    this.ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
  }

  static startGame(){ // check if necessary
    Game.placeShipsPerson();
    Game.placeShipsAI();
    Game.playGame();
  }

  static playGame(){  // should check winner every turn, can be unnecessary ?
    while(!this.isGameOver){
      

      Game.checkWinner();
    }
  }

  static placeShipsPerson(pos) {
    //  will use this.player1.gameboard.placeShip with argument from UI
    // every placement of ship will be removed from array of ships
    // when array became emptyi the UI approve button should be available
  }

  static placeShipsAI(){
    //  will use this.player2.gameboard.placeShip with argument from AI.js
    // every placement of ship will be removed from array of ships
  }

  static attackAI(){
    //  will use this.player1.gameboard.receiveAttack with argument form AI.js
    // can contain makeTurn
  }

  static makeTurn(){  // check if neccessary
    this.turn++;
  }

  static checkWinner(){
    if(this.player1.checkWin(this.player2)){
      this.isGameOver = true;
      this.winner = 'Player 1';
    }

    else if(this.player2.checkWin(this.player1)){
      this.isGameOver = true;
      this.winner = 'Player 2';
    }

    else{
      this.isGameOver = false;
    }
  }

  static resetGame(){
    this.player1 = Player();
    this.player2 = Player();
    this.turn = 0;
    this.isGameOver = false;
    this.winner = '';
    this.ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
  }
}