// Initialize variable for computer's wins
let computerWins = 0;

// Initialize variable for player's wins
let playerWins = 0;

// Initialize variable for rounds played
let round = 1;

game();

function game() {
    while(round <= 5) {
        console.log("Round " + round);
        // Computer will choose it's play
        let computerSelection = computerPlay();

        // Human will choose their play
        let playerSelection = userPlay();

        console.log("Player's Choice: " + playerSelection);

            // Player and computer plays will be compared
        console.log(playRound(playerSelection, computerSelection));
        // Win counter will be incremented by 1 for the player that wins that round
        console.log("Player wins: " + playerWins + " -- Computer Wins: " + computerWins);
        // When 5 rounds have been played, the game will end
    }
        // The player with more wins will be declared the winner
    if (playerWins > computerWins) {
        console.log("You win!!!");
    } else {
        console.log("You lose :(");
    }
}

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const num = Math.floor(Math.random() * 3);
    
    let computerChoice = choices[num];    
    console.log("Computer's Choice: " + computerChoice);

    return choices[num];
}

// Human will choose their play
function userPlay() {
    const userChoices = ['Rock', 'Paper', 'Scissors']
    let input = '';
    let pass = false;
    while(pass === false) {
            // Player will be prompted to input choice
        input = prompt("Please enter Rock, Paper, or Scissors");
            // Player input will be made case insensitive
        input = input[0].toUpperCase() + input.slice(1).toLowerCase();
            // Player input will be checked against acceptable inputs
        if (userChoices.includes(input)) {
            pass = true;
        } else {
            console.log('Please enter a valid input.')
        }
    }
    return input;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "Tie! Play again!";
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            round++;
            computerWins++;
            return "You lose! Paper covers Rock.";
        }
        else if (computerSelection === "Scissors") {
            round++;
            playerWins++;
            return "You win!. Rock crushes Scissors.";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            round++;
            playerWins++;
            return "You win! Paper covers Rock.";
        }
        else if (computerSelection === "Scissors") {
            round++;
            computerWins++;
            return "You lose! Scissors cut Paper.";
        }
    } else {
        if (computerSelection === "Rock") {
            round++;
            computerWins++;
            return "You lose! Rock crushes Scissors.";
        } else if (computerSelection === "Paper") {
            round++;
            playerWins++;
            return "You win! Scissors cut Paper.";
        }
    }
}