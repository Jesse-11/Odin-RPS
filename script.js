let getComputerChoice = () => {

    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        default:
            return 'scissors';
    }
};

let playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    }

}

let game = () => {

    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    while (round < 5) {

        const playerSelection = prompt('Choose rock, paper or scissors');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if (result === 'You win!') {
            playerScore++;
            console.log(`You chose ${playerSelection} and computer chose ${computerSelection}. ${result}`);

        } else if (result === 'You lose!') {
            console.log(`You chose ${playerSelection} and computer chose ${computerSelection}. ${result}`);
            computerScore++;
        } else if (result === 'tie') {
            console.log(`You chose ${playerSelection} and computer chose ${computerSelection}. It's a tie!`);
        }
        round++;
    }

    if (playerScore > computerScore) {
        return 'You win the game!';
    } else if (playerScore < computerScore) {
        return 'You lose the game!';
    } else {
        return 'It\'s a tie!';
    }

}

console.log(game());