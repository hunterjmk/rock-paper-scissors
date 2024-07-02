// computer choice

function getComputerChoice() {
    //Generate random number btwn 0 and 2
    const max = 3;
    let randomNumber = Math.floor(Math.random() * max);

    // computer choice between rock, paper and scissors
    let choice;
    if (randomNumber == 0) {
        choice = 'Rock';
        console.log('Rock');
    } else if (randomNumber == 1) {
        choice = 'Paper';
        console.log('Paper');
    } else {
        choice = 'Scissors';
        console.log('Scissors');
    }

    return choice;
}

// Human choice

function getHumanChoice() {
    // User input
    let input = prompt('Choose: 1. Rock, 2. Paper or 3. Scissors');
    
    // Log
    let choice;
    if (parseInt(input) == 1) {
        choice = 'Rock';
        console.log('Rock');
    } else if (parseInt(input) == 2) {
        choice = 'Paper';
        console.log('Paper');
    } else {
        choice = 'Scissors';
        console.log('Scissors');
    }

    return choice;
}

// let humanScore = 0;
// let computerScore = 0;

// // Play function

// function playRound(humanSelection, compSelection) {
//     if (humanSelection === compSelection) {
//         console.log('It is a draw');
//     } 
//     else if (humanSelection === 'Rock' && compSelection === 'Scissors') {
//         console.log('You win!');
//     } 
//     else if (humanSelection === 'Paper' && compSelection === 'Rock') {
//         console.log('You win!');
//     }
//     else if (humanSelection === 'Scissors' && compSelection === 'Paper') {
//         console.log("You win");
//     }
//     else if (humanSelection === 'Scissors' && compSelection === 'Rock') {
//         console.log('Computer wins');
//     } 
//     else if (humanSelection === 'Rock' && compSelection === 'Paper') {
//         console.log('Computer wins!');
//     }
//     else if (humanSelection === 'Paper' && compSelection === 'Scissors') {
//         console.log('Computer wins!');
//     }
    
// }

// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();


