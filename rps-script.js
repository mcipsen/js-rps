const array = [
    'rock',
    'paper',
    'scissors'
];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * array.length);
    const computerSelection = array[randomIndex];
    return computerSelection;
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats Scissors');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lose! Paper beats Rock');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats Rock');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You Lose! Scissors beats Paper');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Win! Scissors beats Paper');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose! Rock beats Scissors');
    } else {
        console.log('Tie! You both picked the same thing.');
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());




