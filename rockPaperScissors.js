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


// getHumanChoice()
// Returns the user's choice as a string of 'rock', 'paper', or 'scissors'
function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}



// playGame()
// 5 round game loop
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    let round = 1;

    while(round < 6)
    {

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);


        round++;
    }

    // playRound()
    function playRound(humanChoice, computerChoice) {
        console.log(`Player: ${humanChoice}\nComputer: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! No one gains any points.`);
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log(`Computer wins!`)
            computerScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log(`Human wins!`);
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log(`Human wins!`);
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log(`Computer wins!`);
            computerScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log(`Computer wins!`);
            computerScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log(`Human wins!`);
            humanScore++;
        }

        console.log(`Current score:\n\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
    }

}

playGame();