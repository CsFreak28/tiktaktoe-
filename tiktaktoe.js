//get the board for future reference
import headerAnimation from "./animations";
import { preloader } from "./animations";
preloader();
headerAnimation();
const board = document.querySelector(".board");
//get the spaces in the board
const playerSpaces = [...board.children];
//a global variable representing the current player(whos turn it is to play)
let currentPlayer = "x";

//change the current player.
function ChangePlayer() {
  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }
}

//add the text to the html board and change the text colors depending on who's turn it is.
function addPlayerToBoard(textSpace) {
  console.log(textSpace);
  if (textSpace !== undefined) {
    if (currentPlayer === "o") {
      textSpace.style.color = "white";
      textSpace.textContent = currentPlayer;
    } else if (currentPlayer === "x") {
      board.style.color = "#040f16";
      textSpace.textContent = currentPlayer;
    }
  }
}
function play(e) {
  const space = e.target;
  const textSpace = space.children[0];
  addPlayerToBoard(textSpace);
  console.log(currentPlayer);
  const aPlayerHasWon = checkForAWinner();
  console.log(aPlayerHasWon);
  if (aPlayerHasWon === true) {
    restart();
    return;
  }
  if (textSpace !== undefined) {
    ChangePlayer();
  }
}
function checkForAWinner() {
  let currentPlayerHasWon = false;
  const rowComplete = checkRow();
  const columnComplete = checkColumns();
  const diagonalComplete = checkDiagonals();
  if (diagonalComplete || rowComplete || columnComplete) {
    currentPlayerHasWon = true;
  }
  return currentPlayerHasWon;
}
function checkRow() {
  let aPlayerHasWon = false;
  let row1 = [playerSpaces[0], playerSpaces[1], playerSpaces[2]];
  let row2 = [playerSpaces[3], playerSpaces[4], playerSpaces[5]];
  let row3 = [playerSpaces[6], playerSpaces[7], playerSpaces[8]];

  let allTheRows = [row1, row2, row3];
  allTheRows.forEach((row) => {
    if (row.every((el) => el.textContent === currentPlayer)) {
      aPlayerHasWon = true;
    }
  });
  return aPlayerHasWon;
}
function checkColumns() {
  let aPlayerHasWon = false;
  let column1 = [playerSpaces[0], playerSpaces[3], playerSpaces[6]];
  let column2 = [playerSpaces[1], playerSpaces[4], playerSpaces[7]];
  let column3 = [playerSpaces[2], playerSpaces[5], playerSpaces[8]];
  let allTheColumns = [column1, column2, column3];
  allTheColumns.forEach((column) => {
    if (column.every((el) => el.textContent === currentPlayer)) {
      aPlayerHasWon = true;
    }
  });
  return aPlayerHasWon;
}
function checkDiagonals() {
  let aPlayerHasWon = false;
  let diagonal1 = [playerSpaces[0], playerSpaces[4], playerSpaces[8]];
  let diagonal2 = [playerSpaces[2], playerSpaces[4], playerSpaces[6]];
  let allTheDiagonals = [diagonal1, diagonal2];

  allTheDiagonals.forEach((diagonal) => {
    if (diagonal.every((el) => el.textContent === currentPlayer)) {
      aPlayerHasWon = true;
    }
  });
  return aPlayerHasWon;
}
playerSpaces.forEach((space) => {
  space.addEventListener("click", play);
});

function restart() {
  setTimeout(() => {
    window.alert(`player ${currentPlayer} has won `);
    playerSpaces.forEach((el) => {
      let textSpace = el.children[0];
      textSpace.textContent = null;
    });
  }, 100);
}
