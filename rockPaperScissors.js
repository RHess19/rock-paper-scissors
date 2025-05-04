let humanScore = 0;
let computerScore = 0;
let winnerFound = 0;

// Add event listeners to each button
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

rockButton.addEventListener('click', () => {
    if(!winnerFound)
    {
        playRound('rock', getComputerChoice());
    }
});

paperButton.addEventListener('click', () => {
    if(!winnerFound)
    {
        playRound('paper', getComputerChoice());
    }
});

scissorsButton.addEventListener('click', () => {
    if(!winnerFound)
        {
            playRound('scissors', getComputerChoice());
        }
});

const playerChoicesText = document.querySelector(".playerChoicesText");
const winnerText = document.querySelector(".winnerText");
const scoreText = document.querySelector(".scoreText");
const gameWinnerText = document.querySelector(".gameWinnerText");

playerChoicesText.textContent = `Player: Computer: `;
scoreText.textContent = `Player: ${humanScore}\nComputer: ${computerScore}`;

// getComputerChoice()
// Generates a random number from 0-2
// 0 - rock
// 1 - paper
// 2 - scissors
// Returns a string of 'rock', 'paper', or 'scissors'
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return 'rock';
            break;

        case 1:
            return 'paper';
            break;

        case 2:
            return 'scissors';
            break;
    }
}



// playRound()
function playRound(humanChoice, computerChoice) {
    playerChoicesText.textContent = `Player: ${humanChoice}\nComputer: ${computerChoice}`;

    if (humanChoice === computerChoice) {
        winnerText.textContent = `It's a tie! No one gains any points.`;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        winnerText.textContent = "Computer wins!";
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        winnerText.textContent = "Human wins!";
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        winnerText.textContent = "Human wins!";
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        winnerText.textContent = "Computer wins!";
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        winnerText.textContent = "Computer wins!";
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        winnerText.textContent = "Human wins!";
        humanScore++;
    }

    scoreText.textContent = `Player: ${humanScore}\nComputer: ${computerScore}`;

    // UDPATE IF END OF GAME - 5 POINTS
    if (humanScore == 5)
    {
        gameWinnerText.textContent = "Player wins!";
        winnerFound = 1;
    }
    else if (computerScore == 5)
    {
        gameWinnerText.textContent = "Computer wins!";
        winnerFound = 1;
    }
}