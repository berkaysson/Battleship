import Ship from '../modules/Ship';
import Player from '../modules/Player';

export default class Game {
  constructor(){
    this.player1 = Player();  // Person
    this.player2 = Player();  // AI
    this.turn = 0;
    this.isGameOver = false;
    this.winner = '';
    this.ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
  }

  static startGame(){
    Game.placeShipsPerson();
    Game.placeShipsAI();
    Game.playGame();
  }

  static playGame(){
    while(!this.isGameOver){


      Game.checkWinner();
    }
  }

  static placeShipsPerson() {
    
  }

  static placeShipsAI(){

  }

  static makeTurn(){
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
  }
}