

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
    let currentPlayer = player1;
  
    const playRound = (index) => {
      Gameboard.updateBoard(index, currentPlayer.marker);
      switchTurn();

      
      //winner combination array check here



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



     // check winner function goes here



  
    return { playRound };
  })();

  
  
  
  