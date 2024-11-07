

const Player = (name, marker) => {
    return { name, marker };
  };
  
  const player1 = Player("Alice", "X");
  const player2 = Player("Bob", "O");

  



const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    return {
      getBoard: () => board,
      updateBoard: (index, playerMark) => {
        if (board[index] === "") {
          board[index] = playerMark;
        }
      }
    };
  })();
  



const GameController = (() => {

  const winnerCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
  
    [0,3,6],
    [1,4,7],
    [2,5,8],
  
    [0,4,8],
    [2,4,6]
    
  ];



    let currentPlayer = player1;
  
    const playRound = (index) => {
      Gameboard.updateBoard(index, currentPlayer.marker);
      printBoard();
      checkWinner();
      switchTurn();
//winner combination array check here
       
    }

const checkWinner = () => {
  const board = Gameboard.getBoard(); // Get the current state of the board

  for (let combination of winnerCombinations) {

    const [a, b, c] = combination;

    if (board[a] === currentPlayer.marker && board[b] === currentPlayer.marker && board[c] === currentPlayer.marker) {

      console.log("winner"); // If a winner is found, log it
      return true;
    }
  }
  return false;
}

      
      
    
      
      
const printBoard = () => {
      const board = Gameboard.getBoard();
      console.log(`${board[0]} | ${board[1]} | ${board[2]}`);
      console.log("---------");
      console.log(`${board[3]} | ${board[4]} | ${board[5]}`);
      console.log("---------");
      console.log(`${board[6]} | ${board[7]} | ${board[8]}`);
};
      
    
  
    const switchTurn = () => {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    };






  
    return { playRound };
  })();

  
  
  
  