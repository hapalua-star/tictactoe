

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

      console.log(Gameboard.getBoard());
    };
  
    const switchTurn = () => {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
  
    return { playRound };
  })();

  
  
  
  