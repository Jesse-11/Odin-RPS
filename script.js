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

};