// // moves
// const playerSelection = "paper".toUpperCase();
// const gameMoves = ['ROCK', 'PAPER', 'SCISSORS'];
// const computerSelection = gameMoves[Math.floor(Math.random() * gameMoves.length)];

const intro = alert('Lets play a game of Rock Paper Scissors!');

// score 
let userScore = 0;
let computerScore = 0;

let round = 0;

// round function 
function playRound(){
    const playerSelection = prompt("Pick a weapon").toUpperCase();

    const gameMoves = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerSelection = gameMoves[Math.floor(Math.random() * gameMoves.length)];
        if (playerSelection == false) {
            let playerSelection = alert("Please pick Rock, Paper or Scissors")
        } else if (playerSelection == "ROCK" && computerSelection == "ROCK") {
            console.log("It's a Tie!");
        } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            computerScore += 1;
            console.log("Paper Beats Rock. You Lose.");
        } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") { 
            userScore += 1;
            console.log("Rock Beats Scissors. You win!");
        } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            userScore += 1;
            console.log("Paper Beats Rock. You Win!");
        } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
            console.log("It's a Tie!");
        } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") { 
            computerScore += 1;
            console.log("Scissors beats Paper. You lose.");
        } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            userScore += 1;
            console.log("Scissors beats Paper. You win!");
        } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") { 
            console.log("It's a Tie!");
        } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            computerScore += 1;
            console.log("Rock beats Scissors. You Lose!");
}
}
// game loop 

function game(){
    
    while (userScore <= 4 || computerScore <= 4) {
        playRound();
        let totalScore = `<h2>Total Score:<br>User: ${userScore}<br>Computer: ${computerScore}</h2>`;
        document.querySelector('main').innerHTML = totalScore;
        console.log("Computer score", computerScore);
        console.log("User score", userScore);
        if (userScore === 5){
        console.log("Game Over. You Win!");
        const playerWin = `<center><h2>Well done you got the crown!!!.</h2> <br><br><img src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"></center>`;
document.querySelector('main').innerHTML = playerWin;
        break;
        } else if (computerScore === 5){
            console.log("Game Over. Computer Wins");
            const compWin = `<center><h2>Computer Wins!!!.</h2> <br><br><img src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"></center>`;
document.querySelector('main').innerHTML = compWin;
            break;
        }
        }
  }


//runs the game once to enter loop
game();

// console.log("Computer score", computerScore);
// console.log("User score", userScore);


// console.log(playRound(playerSelection, computerSelection))