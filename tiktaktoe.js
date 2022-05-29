//get the board for future reference
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
  if (currentPlayer === "o" && textSpace !== undefined) {
    textSpace.innerHTML = `<div class='player-o'>${currentPlayer}</div>`;
  } else if (textSpace !== undefined) {
    textSpace.innerHTML = `<div>${currentPlayer}</div>`;
  }
}
function play(e) {
  const space = e.target;
  const textSpace = space.children[0];
  console.log(textSpace);
  addPlayerToBoard(textSpace);
  checkForAWinner();
  ChangePlayer();
}
function checkForAWinner() {
  const value = checkRow();
  console.log(value);
}
checkForAWinner();
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
playerSpaces.forEach((space) => {
  space.addEventListener("click", play);
});
