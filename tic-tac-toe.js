let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(cellIndex) {
  if (!gameActive || gameBoard[cellIndex] !== "") {
    return;
  }

  gameBoard[cellIndex] = currentPlayer;
  document.getElementsByClassName("cell")[cellIndex].textContent = currentPlayer;

  if (checkWin()) {
    document.getElementById("message").textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (checkDraw()) {
    document.getElementById("message").textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return gameBoard.every((cell) => cell !== "");
}
