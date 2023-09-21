const weaponButtons = document.querySelectorAll('.weapon-button');
const rounds = document.querySelector('.round');
const combatText = document.querySelector('.combat-text');
const buttonPlayAgain = document.querySelector('.play-again');

let playerLives = 5;
let sheldonLives = 5;
let round = 0;
let playerSelection;

function countRounds()
{
    round += 1;
    rounds.innerText = 'Round: ' + round;
    return round;
}


function computerPlayTest() {
    const weaponArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = weaponArray[Math.floor((Math.random() * 5))];
    const computerIcon = document.querySelector('.computer-icon');


    computerIcon.classList.remove('fa-glasses', 'fa-hand-back-fist', 'fa-hand-paper', 'fa-hand-scissors', 'fa-hand-lizard', 'fa-hand-spock');

    if (computerChoice === 'rock') {
        computerIcon.classList.add('fa-hand-back-fist');
        computerIcon.style.color = '#6c97e6';
    } else if (computerChoice === 'paper') {
        computerIcon.classList.add('fa-hand-paper');
        computerIcon.style.color === '#b96b78';
    } else if (computerChoice === 'scissors') {
        computerIcon.classList.add('fa-hand-scissors');
        computerIcon.style.color = '#f1d56c';
    } else if (computerChoice === 'lizard') {
        computerIcon.classList.add('fa-hand-lizard');
        computerIcon.style.color = '#62b49c';
    } else if (computerChoice === 'spock') {
        computerIcon.classList.add('fa-hand-spock');
        computerIcon.style.color = '#8070ac';
    }
    return computerChoice;
}


function livesCount(playerSelection, computerSelection) {
    const gameOutput = document.querySelector('.game-output');
    const computerPlayDiv = document.querySelector('.computer-play-div');

    switch(true) {
        case (playerSelection === computerSelection):
            combatText.innerText = 'Hmm.. a draw. Guess you get to live another day';
            gameOutput.style.border = '4px solid #8070ac';
            computerPlayDiv.classList.remove('white-border', 'green-border', 'red-border', 'yellow-border', 'blue-border');
            computerPlayDiv.classList.add('purple-border');
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissors'):
        case (playerSelection === 'rock' && computerSelection === 'lizard'):
        case (playerSelection === 'paper' && computerSelection === 'rock'):
        case (playerSelection === 'paper' && computerSelection === 'spock'):
        case (playerSelection === 'scissors' && computerSelection === 'paper'):
        case (playerSelection === 'scissors' && computerSelection === 'lizard'):
        case (playerSelection === 'lizard' && computerSelection === 'paper'):
        case (playerSelection === 'lizard' && computerSelection === 'spock'):
        case (playerSelection === 'spock' && computerSelection === 'rock'):
        case (playerSelection === 'spock' && computerSelection === 'scissors'):
            combatText.textContent = 'You won this round Leonard, Penny is impresed !';
            gameOutput.style.border = '4px solid #62b49c';
            computerPlayDiv.classList.remove('white-border', 'red-border', 'yellow-border', 'purple-border', 'blue-border');
            computerPlayDiv.classList.add('green-border');
            sheldonLives -= 1;
            break;
        default:
            combatText.innerText = 'Unfourante defeat.. Bazinga, You suck! ' ;
            gameOutput.style.border = '4px solid #b96b78';
            computerPlayDiv.classList.remove('white-border', 'yellow-border', 'purple-border', 'blue-border', 'red-border');
            computerPlayDiv.classList.add('red-border');
            playerLives -= 1;
            break;
    }
    const lives = document.querySelector('.lives');
    lives.innerText = 'Leonard: ' + playerLives + ' | Sheldon: ' + sheldonLives + '';
    return [playerLives, sheldonLives];

}

function gameEnd(playerLives, sheldonLives) {
    if (playerLives === 0 || sheldonLives === 0) {
        weaponButtons.forEach(button => {
            button.setAttribute('disabled', '')
            button.classList.add('disabled-button', 'opacity');
        });

        const computerIcon = document.querySelector('.computer-icon');
        computerIcon.style.opacity = '0.8';
        const playAgain = document.querySelector('.play-again');

        const gameEndText = document.querySelector('.game-end-text');
        if (playerLives > sheldonLives) {
            combatText.innerText = 'Sheldon has fallen! He struggles to bare defeat!';
            gameEndText.innerText = 'Leonard won this Battle!';
            gameEndText.style.color = '#62b49c';
            playAgain.style.border = '4px solid #62b49c';

        } else {
            combatText.innerText = 'Leonard has lost!, Penny shakes her head in disappointment!';
            gameEndText.innerText = 'Sheldon won this Battle!';
            gameEndText.style.color = '#b96b78';
            playAgain.style.border = '4px solid #b96b78';
        }

        
        buttonPlayAgain.style.visibility = 'visible';
    }
}

function resetGame() {
    buttonPlayAgain.addEventListener('click', () => {
        window.location.reload();
    });
}

function playGame() {
    weaponButtons.forEach((weapon) => {
        weapon.addEventListener('click', () => {
            const weaponIcons = document.querySelectorAll('.weapon-icon');
            if (weapon.classList.contains('rock-button')) {
                weaponIcons[0].style.color = '#6c97e6';
                weaponIcons[1].style.color = '#eee7e7';
                weaponIcons[2].style.color = '#eee7e7';
                weaponIcons[3].style.color = '#eee7e7';
                weaponIcons[4].style.color = '#eee7e7';
                playerSelection = 'rock';
            } else if (weapon.classList.contains('paper-button')) {
                weaponIcons[0].style.color = '#eee7e7';
                weaponIcons[1].style.color = '#b96b78';
                weaponIcons[2].style.color = '#eee7e7';
                weaponIcons[3].style.color = '#eee7e7';
                weaponIcons[4].style.color = '#eee7e7';
                playerSelection = 'paper';
            } else if (weapon.classList.contains('scissors-button')) {
                weaponIcons[0].style.color = '#eee7e7';
                weaponIcons[1].style.color = '#eee7e7';
                weaponIcons[2].style.color = '#f1d56c';
                weaponIcons[3].style.color = '#eee7e7';
                weaponIcons[4].style.color = '#eee7e7';
                playerSelection = 'scissors';
            } else if (weapon.classList.contains('lizard-button')) {
                weaponIcons[0].style.color = '#eee7e7';
                weaponIcons[1].style.color = '#eee7e7';
                weaponIcons[2].style.color = '#eee7e7';
                weaponIcons[3].style.color = '#62b49c';
                weaponIcons[4].style.color = '#eee7e7';
                playerSelection = 'lizard';
            } else {
                weaponIcons[0].style.color = '#eee7e7';
                weaponIcons[1].style.color = '#eee7e7';
                weaponIcons[2].style.color = '#eee7e7';
                weaponIcons[3].style.color = '#eee7e7';
                weaponIcons[4].style.color = '#8070ac';
                playerSelection = 'spock';
            }
            countRounds();
            computerPlayTest();
            livesCount(playerSelection, computerPlayTest());
            gameEnd(playerLives, sheldonLives);
            resetGame();
        });
    });
}

playGame()
