// Initialize variable for computer's wins
let computerWins = 0;

// Initialize variable for player's wins
let playerWins = 0;

// Initialize variable for rounds played
let round = 1;
console.log(round);

// Computer will choose it's play
let computerSelection = computerPlay();

// Human will choose their play
let playerSelection = userPlay();

console.log(playerSelection);
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const num = Math.floor(Math.random() * 3);
    
    let computerChoice = choices[num];    
    console.log("Computer's Choice:" + computerChoice);

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
    // Player and computer plays will be compared
// Win counter will be incremented by 1 for the player that wins that round
// When 5 rounds have been played, the game will end
// The player with more wins will be declared the winner