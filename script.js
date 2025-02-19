
// function playGame() {

//     // play five rounds
//     const rounds = 5;

//     for (i = 0; i < rounds; i++) {
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();

//         playRound(humanChoice, computerChoice);
//     }




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

// function getHumanChoice() {
//     // User input
//     let input = prompt('Choose: 1. Rock, 2. Paper or 3. Scissors');
    
//     // Log
//     let choice;
//     if (parseInt(input) == 1) {
//         choice = 'Rock';
//         console.log('Rock');
//     } else if (parseInt(input) == 2) {
//         choice = 'Paper';
//         console.log('Paper');
//     } else {
//         choice = 'Scissors';
//         console.log('Scissors');
//     }

//     return choice;
// }

let humanScore = 0;
let computerScore = 0;

// Play function`
const scoreDiv = document.querySelector('#score');
const scoreSpan = document.createElement('div');
const compSpan = document.createElement('div');

const cDiv = document.querySelector('#c-score');
const hDiv = document.querySelector('#h-score');

const cSpan = document.createElement('span');
const hSpan = document.createElement('span');

const declaration = document.createElement('span');
declaration.classList.add('declaration');

scoreDiv.appendChild(declaration);

scoreDiv.append(compSpan, scoreSpan);
cDiv.append(cSpan);
hDiv.append(hSpan);

function playRound(humanSelection, compSelection) {
    if (humanSelection === compSelection) {
        console.log('It is a draw');
        compSpan.textContent = 'Computer chooses ' + compSelection;
        scoreSpan.textContent = 'It is a draw';
    } 
    else if (humanSelection === 'Rock' && compSelection === 'Scissors') {
        console.log('You win!');
        compSpan.textContent = 'Computer chooses ' + compSelection;
        scoreSpan.textContent = 'You win!';
        humanScore++;
    } 
    else if (humanSelection === 'Paper' && compSelection === 'Rock') {
        console.log('You win!');
        compSpan.textContent = 'Computer chooses ' + compSelection;
        scoreSpan.textContent = 'You win!';
        humanScore++;
    }
    else if (humanSelection === 'Scissors' && compSelection === 'Paper') {
        console.log("You win");
        compSpan.textContent = 'Computer chooses ' + compSelection;
        scoreSpan.textContent = 'You win!';
        humanScore++;
    }
    else if (humanSelection === 'Scissors' && compSelection === 'Rock') {
        console.log('Computer wins');
        compSpan.textContent = 'Computer chooses ' + compSelection;
        scoreSpan.textContent = 'Computer wins!';
        computerScore++;
    } 
    else if (humanSelection === 'Rock' && compSelection === 'Paper') {
        console.log('Computer wins!');
        compSpan.textContent = 'Computer chooses ' + compSelection;
        scoreSpan.textContent = 'Computer wins!';
        computerScore++;
    }
    else if (humanSelection === 'Paper' && compSelection === 'Scissors') {
        console.log('Computer wins!');
        compSpan.textContent = 'Computer chooses ' + compSelection;
        scoreSpan.textContent = 'Computer wins!';
        computerScore++;
    }

    cSpan.textContent = computerScore;
    hSpan.textContent = humanScore;
    
    if (humanScore == 5 || computerScore == 5) {

        if (humanScore > computerScore) {
            console.log(`Human: ${humanScore}`);
            console.log(`Computer: ${computerScore}`);
            console.log('Congratulations, you won!');

            declaration.textContent = 'Hurray! You Win this round.';
        }
        else {
            console.log(`Human: ${humanScore}`);
            console.log(`Computer: ${computerScore}`);
            console.log('You lost! Better luck next time.');

            declaration.textContent = 'Uh oh, you lose! Try again.';
        }
        setTimeout(timeOut, 1500);
        
    }
}

function timeOut() {
    computerScore = 0;
    humanScore = 0;
    cSpan.textContent = computerScore;
    hSpan.textContent = humanScore;
    declaration.textContent = "";
    compSpan.textContent = '';
    scoreSpan.classList.add('declaration');
    scoreSpan.textContent = 'Start a new round!';

}



// playGame();

// Button event listeners

let rockBtn = document.querySelector('#btn-one');
let paperBtn = document.querySelector('#btn-two');
let scissorsBtn = document.querySelector('#btn-three');

rockBtn.addEventListener('click', () => {
    const humanChoice = 'Rock';
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
});

paperBtn.addEventListener('click', () => {
    const humanChoice = 'Paper';
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
});

scissorsBtn.addEventListener('click', () => {
    const humanChoice = 'Scissors';
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
});



// Total Tally

// if (humanScore == computerScore) {
//     console.log(`Human: ${humanScore}`);
//     console.log(`Computer: ${computerScore}`);
//     console.log('It is a draw!');
// }
// else if (humanScore > computerScore) {
//     console.log(`Human: ${humanScore}`);
//     console.log(`Computer: ${computerScore}`);
//     console.log('Congratulations, you won!');
// }
// else {
//     console.log(`Human: ${humanScore}`);
//     console.log(`Computer: ${computerScore}`);
//     console.log('You lost! Better luck next time.');
// }

