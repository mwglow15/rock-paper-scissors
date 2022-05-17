// Initialize variable for computer's wins
let computerWins = 0;

// Initialize variable for player's wins
let playerWins = 0;

// Initialize variable for rounds played
let round = 1;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click',
    playRound
));

const roundContent = document.querySelector(".round");
const score = document.querySelector(".score");
const callout = document.querySelector(".callout");

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const num = Math.floor(Math.random() * 3);
    
    let computerChoice = choices[num];    
    console.log("Computer's Choice: " + computerChoice);

    return choices[num];
}

function playRound(e) {
    
    const playerSelection = e.target.className;
    console.log("Player Choice: " + playerSelection)
    const computerSelection = computerPlay();

    if (computerSelection === playerSelection) {
        callout.textContent = "Tie! Play again!";
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            round++;
            computerWins++;
            callout.textContent = "You lose! Paper covers Rock.";
        }
        else if (computerSelection === "Scissors") {
            round++;
            playerWins++;
            callout.textContent = "You win!. Rock crushes Scissors.";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            round++;
            playerWins++;
            callout.textContent = "You win! Paper covers Rock.";
        }
        else if (computerSelection === "Scissors") {
            round++;
            computerWins++;
            callout.textContent = "You lose! Scissors cut Paper.";
        }
    } else {
        if (computerSelection === "Rock") {
            round++;
            computerWins++;
            callout.textContent = "You lose! Rock crushes Scissors.";
        } else if (computerSelection === "Paper") {
            round++;
            playerWins++;
            callout.textContent = "You win! Scissors cut Paper.";
        }
    }
    score.textContent = "Player:" + playerWins + " -- Computer: " + computerWins;
    round.textContent = "Round " + round;
    if (playerWins >= 5) {
        callout.textContent = "You Win!  You have defeated the computer!";
    } else if (computerWins >= 5) {
        callout.textContent = "You lose. The computer has beaten you.";
    }
}