

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
          
          const cell = document.querySelector(`[data-index='${index}']`);
          if (cell) {
              cell.removeEventListener("click", handleCellClick);
  
      
      }
    };
  }
};
  })();


  function handleCellClick(event) {
    const index = event.target.getAttribute("data-index");
    GameController.playRound(index);
}
  



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
      if (gameOver || Gameboard.updateBoard(index, currentPlayer.marker)) return;

      //Gameboard.updateBoard(index, currentPlayer.marker);
      printBoard();
     // if (checkWinner()) return;
      checkWinner();
      switchTurn();  //needs to be worked on!!!!!!!
//winner combination array check here
       
    }

    let gameOver=false;

const checkWinner = () => {
  const board = Gameboard.getBoard(); // Get the current state of the board

  for (let combination of winnerCombinations) {

    const [a, b, c] = combination;

    if (board[a] === currentPlayer.marker && board[b] === currentPlayer.marker && board[c] === currentPlayer.marker) {

      console.log(currentPlayer.name+" is winner"); // If a winner is found, log it
      console.log("GAME OVER!");
      gameOver=true;
      return true;
    }
  }
  return false;
}

      
      
    
      
      
const printBoard = () => {
      const board = Gameboard.getBoard();

      const cells = document.querySelectorAll(".cell1"); // Select all board cells

      cells.forEach((cell, index) => {
          cell.textContent = board[index]; // Update cell content

          if (board[index] !== "") {
            cell.removeEventListener("click", handleCellClick);
        }


      });







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

  
  const DisplayController= (function(){
    var cells=document.querySelectorAll(".cell1");

    function render(){
      var board=Gameboard.getBoard();
      for(var i=0; i<cells.length;i++){
        cells[i].textContent=board[i];
      
    }
  }

    function addEventlisteners(){
      for(var i=0; i<cells.length; i++){
         (function (index){
          cells[index].addEventListener("click",function(){
            GameController.playRound(index); 
          });
         })(i); //use iife to capture the correct index in the loop

      }
    }
    return{render:render,addEventlisteners:addEventlisteners};
  })();
  
  //initialize the game
  //DisplayController.addEventlisteners();
  
  
  const frame1=document.getElementById('tictactoe');

  const startButton=document.createElement('button');
  startButton.classList.add('startButton');

  frame1.appendChild(startButton);

  startButton.addEventListener("click",function()
{
  DisplayController.addEventlisteners();
});
  