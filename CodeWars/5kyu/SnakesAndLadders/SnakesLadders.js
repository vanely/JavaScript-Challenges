/**
 * Task
 * 
 * Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.
 * 
 * 
 * Rules
 * 
 * 1.  There are two players and both start off the board on square 0.
 * 
 * 2.  Player 1 starts and alternates with player 2.
 * 
 * 3.  You follow the numbers up the board in order 1=>100
 * 
 * 4.  If the value of both die are the same then that player will have another go.
 * 
 * 5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).
 * 
 * 6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).
 * 
 * 7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)
 * 
 * Returns
 * 
 * Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.
 * 
 * Return Game over! if a player has won and another player tries to play.
 * 
 * Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.
 */


class SnakesLadders {
  constructor() {
    this.player1Position = 0;
    this.player2Position = 0;
    this.gameBoard = {};
    this.currentRoll = [];
    this.player1Turn = true; // player one === true, and player 2 === false
  }

  countDown() {
    let counter = 3;

    console.log('Generating game board...');
    let timer = setInterval(() => console.log(time()), 1000);
    function time() {
      if (counter === 0) {
        clearInterval(timer);
        return 'Game board generated!\n'
      }
      return counter--;
    }
  }

  generateBoard() {
    let ladders = 10;
    let snakes = 10;
    let gameBoardSize = 0;

    for (let i = 1; i <= 100; i++) {
      this.gameBoard[i] = [i, '', 0];
    }
  
    gameBoardSize = Object.entries(this.gameBoard).length - 1;
    // FIX THIS: not generating all snakes and ladders
    for (let i = 1; i <= ladders + snakes; i++) {
      const randomPosition = Math.ceil(Math.random() * gameBoardSize);
      const randomNewPosition = Math.floor(Math.random() * (50 - 8)) + 8;
  
      if(snakes > 0 && ladders > 0) {
        if ((randomPosition < randomNewPosition) && (randomPosition !== randomNewPosition) && (randomPosition + randomNewPosition !== 100)) {
          this.gameBoard[randomPosition.toString()][1] = 'ladder';
          this.gameBoard[randomPosition.toString()][2] = randomNewPosition;
          ladders -= 1;
        } else if ((randomPosition > randomNewPosition) && (randomPosition !== randomNewPosition) && (randomPosition - randomNewPosition > 1)) {
          this.gameBoard[randomPosition.toString()][1] = 'snake';
          this.gameBoard[randomPosition.toString()][2] = randomNewPosition;
          snakes -= 1;
        }
      }
    }
    
    this.countDown();
    console.log(this.gameBoard);
  }

  roll() {
    const die1 = Math.ceil(Math.random() * 6);
    const die2 = Math.ceil(Math.random() * 6);
    return [die1, die2];
  }

  decideTurn() {
    const diceRoll = this.roll();
    if (diceRoll[0] > diceRoll[1]) {
      return 'Player 1 goes first!\n'; 
    }

    this.player1Turn = !this.player1Turn;
    return 'Player 2 goes first\n';
  }

  // FIX THIS: position remains at 0
  // roll and update player position
  updatePosition(currentPlayerPosition) {
    const playerRoll = this.roll();
    let newPosition = currentPlayerPosition; // last position

    currentPlayerPosition = currentPlayerPosition + (playerRoll[0] + playerRoll[1]);
    newPosition = this.gameBoard[currentPlayerPosition.toString()]; // updated new position from roll

    if (newPosition[1] === 'ladder') {
      currentPlayerPosition += this.gameBoard[currentPlayerPosition.toString()][2];
      console.log(`Found a ladder and climbed past ${this.gameBoard[currentPlayerPosition.toString()][2]} spaces!\n`);
    } else if (newPosition[1] === 'snake') {
      currentPlayerPosition -= this.gameBoard[currentPlayerPosition.toString()][2];
      console.log(`Stepped on a snake and was shat down ${this.gameBoard[currentPlayerPosition.toString()][2]} spaces!\n`)
    }

  }

  takeTurn() {
    if (this.player1Turn) {
      // reserve some dialog to tell player 1 it is their turn.
      console.log('Player 1 turn!\n');

      const player1Roll = this.roll();
      let newPosition = this.player1Position; // last position

      this.player1Position = this.player1Position + (player1Roll[0] + player1Roll[1]);
      newPosition = this.gameBoard[this.player1Position.toString()]; // updated new position from roll

      if (newPosition[1] === 'ladder') {
        this.player1Position += this.gameBoard[this.player1Position.toString()][2];
        console.log(`Found a ladder and climbed past ${this.gameBoard[this.player1Position.toString()][2]} spaces!\n`);
      } else if (newPosition[1] === 'snake') {
        this.player1Position -= this.gameBoard[this.player1Position.toString()][2];
        console.log(`Stepped on a snake and was shat down ${this.gameBoard[this.player1Position.toString()][2]} spaces!\n`)
      }
      console.log(`Player 1 is now at position ${this.player1Position}\n`);
      this.player1Turn = !this.player1Turn;
    }
    //--------------------------------------------------------------------------------------------------------------------
    // reserve some dialog to tell player 2 it is their turn.
    console.log('Player 2 turn!\n');

    const player2Roll = this.roll();
    let newPosition = this.player2Position; // last position

    this.player2Position = this.player2Position + (player2Roll[0] + player2Roll[1]);
    newPosition = this.gameBoard[this.player2Position.toString()]; // updated new position from roll

    if (newPosition[1] === 'ladder') {
      this.player2Position += this.gameBoard[this.player2Position.toString()][2];
      console.log(`Found a ladder and climbed past ${this.gameBoard[this.player2Position.toString()][2]} spaces!\n`);
    } else if (newPosition[1] === 'snake') {
      this.player2Position -= this.gameBoard[this.player2Position.toString()][2];
      console.log(`Stepped on a snake and was shat down ${this.gameBoard[this.player2Position.toString()][2]} spaces!\n`)
    }
    console.log(`Player 2 is now at position ${this.player2Position}\n`);
    this.player1Turn = !this.player1Turn;
  }

  play() {
    this.generateBoard();

    while((this.player1Position !== 100) && (this.player2Position !== 100)) {
      this.takeTurn();
    }
  }
}

// generate random range
function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const snakeGame = new SnakesLadders();
snakeGame.generateBoard();
// console.log(snakeGame.gameBoard);

