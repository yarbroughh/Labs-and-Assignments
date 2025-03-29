//Create class for the players, which only takes in 1 items since there is always only 2 
//players and they are always referred to as X or O
class Player {
    constructor (mark) {
        this.mark = mark;
    }
}

//Create new players and assign a mark to each 
const playerX = new Player("X");
const playerO = new Player("O");

//I had to add this to hide the alert at the beginning because there was an unncessary X visible
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("playAlert").style.display = "none";
});


//First player has "X" mark
let currentPlayer = playerX;

//Display the player's mark in the title "It's "player-mark"'s turn
function playerTurn() {
    const playerMarkElement = document.getElementById("player-mark");
    playerMarkElement.textContent = currentPlayer.mark;
}

//Use a ternary operator instead of if/else to determine whose turn it is next
function nextTurn() {
    currentPlayer = currentPlayer === playerX ? playerO : playerX;
    playerTurn();
}

//Add event listeners to the squares(buttons). I'd  learned getElementsByClassName but that 
//doesn't give me an array and I learned querySelectorAll is more modern and direct
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("click", takeTurn);
})


//Use a ternary operator here as well, to determine whether an X or O will be 
//placed in the square
function takeTurn(event) {
    
    const clickedSquare = event.target;
    const playAlert = document.getElementById("playAlert");

    if (clickedSquare.disabled) {
        return; // Had to add this to do nothing if the square is disabled
    }

    if (clickedSquare.textContent === "") {
        clickedSquare.textContent = currentPlayer.mark;
//Learned that I need to add a class to the marks when they're added to a square in 
//order to target them with CSS
        clickedSquare.classList.add(currentPlayer.mark === "X" ? "x-mark" : "o-mark");
        nextTurn();
        playAlert.textContent = "";
        document.getElementById("playAlert").style.display = "none";
    } else {
        document.getElementById("playAlert").style.display = "block";
        document.getElementById("playAlert").textContent = "You can't play there, silly!";
            //playAlert.textContent = "You can't play there, silly!";
    }
//Check to see if there are 3 same marks in a row or if all squares are checked
    checkGameStatus();
}
playerTurn();

function checkGameStatus() {
    //Create an element for each square so we can check its content
    const boardSquare1 = document.getElementById("square1");
    const boardSquare2 = document.getElementById("square2");
    const boardSquare3 = document.getElementById("square3");
    const boardSquare4 = document.getElementById("square4");
    const boardSquare5 = document.getElementById("square5");
    const boardSquare6 = document.getElementById("square6");
    const boardSquare7 = document.getElementById("square7");
    const boardSquare8 = document.getElementById("square8");
    const boardSquare9 = document.getElementById("square9");

    //Add a function to compare the content to check for matches
    function checkWin(sq1, sq2, sq3) {
        return sq1.textContent !== "" &&
               sq1.textContent === sq2.textContent &&
               sq1.textContent === sq3.textContent;
    }

    const playAlert = document.getElementById("playAlert");

    // Check if 3 in a row match for a win
    if (checkWin(boardSquare1, boardSquare2, boardSquare3) ||
    checkWin(boardSquare4, boardSquare5, boardSquare6) ||
    checkWin(boardSquare7, boardSquare8, boardSquare9) ||
    checkWin(boardSquare1, boardSquare4, boardSquare7) ||
    checkWin(boardSquare2, boardSquare5, boardSquare8) ||
    checkWin(boardSquare3, boardSquare6, boardSquare9) ||
    checkWin(boardSquare1, boardSquare5, boardSquare9) ||
    checkWin(boardSquare3, boardSquare5, boardSquare7)) {
    
    // Game won when 3 squares match and a button is displayed to reset the game
      //DELETE COMMENT: I removed <button onclick='resetGame()'>Play Again</button> since we have a bootstrap popup
        playAlert.innerHTML = (currentPlayer === playerX ? playerO.mark + " wins! <button id='playAgainBtn'>Play Again</button>" 
            : playerX.mark + " wins! <button id='playAgainBtn'>Play Again</button>");
        playAlert.classList.remove("alert-warning", "alert-danger");
        playAlert.classList.add("alert-success");
        playAlert.style.display = "block";
        const playAgainButton = document.getElementById("playAgainBtn");
        playAgainButton.addEventListener("click", resetGame);
    
    //I needed to disable the squares, as the player was still able to click on open squares after a win
        squares.forEach((square) => {
            square.disabled = true;
        });

    } else if (
        boardSquare1.textContent !== "" &&
        boardSquare2.textContent !== "" &&
        boardSquare3.textContent !== "" &&
        boardSquare4.textContent !== "" &&
        boardSquare5.textContent !== "" &&
        boardSquare6.textContent !== "" &&
        boardSquare7.textContent !== "" &&
        boardSquare8.textContent !== "" &&
        boardSquare9.textContent !== ""
        ) {
     // Game tied when no more open squares and a button is displayed to reset the game
        playAlert.innerHTML = "Tie game! <button id='playAgainBtn'>Play Again</button>";
        playAlert.classList.remove("alert-warning", "alert-success");
        playAlert.classList.add("alert-danger");
        playAlert.style.display = "block";
        const playAgainButton = document.getElementById("playAgainBtn");
        playAgainButton.addEventListener("click", resetGame);
    }
}
//Clear out the squares
function resetGame() {
    const squares = document.querySelectorAll (".square");
    squares.forEach((square) => {
        square.textContent = "";
        square.classList.remove("x-mark", "o-mark");
    });
    currentPlayer = playerX;
    playerTurn();
    document.getElementById("playAlert").style.display = "none";
    //Added to not allow clicks after game is won
    squares.forEach((square) => {
        square.disabled = false;
});
}
document.getElementById("resetBtn").addEventListener("click", resetGame);