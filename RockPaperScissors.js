// Initialize variable for computer's wins
let computerWins = 0;

// Initialize variable for player's wins
let playerWins = 0;
// Initialize variable for rounds played
let round = 1;
console.log(round);
// Computer will choose it's play
function computerSelection() {
    const num = Math.floor(Math.random() * 3);
    console.log(num);
    let choices = ['Rock', 'Paper', 'Scissors'];
    
    return choices[num];
}
// Human will choose their play
function playerSelection() {


    // Player will be prompted to input choice
    // Player input will be made case insensitive
    // Player input will be checked against acceptable inputs
}
    // Player and computer plays will be compared
// Win counter will be incremented by 1 for the player that wins that round
// When 5 rounds have been played, the game will end
// The player with more wins will be declared the winner