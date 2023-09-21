const weaponButtons = document.querySelectorAll('.weapon-button');
const rounds = document.querySelector('.round');
const combatText = document.querySelector('.combat-text');
const buttonPlayAgain = document.querySelector('.play-again');

function playGame() {
    let playerSelection;
    weaponButtons.forEach((weapon) => {
        weapon.addEventListener('click', () => {
            const weaponIcons = document.querySelectorAll('.weapon-icon');
            if (weapon.classList.contains('.rock-button')) {
                weaponIcons[0].style.color = '#6c97e6';
                weaponIcons[1].style.color = '#eee7e7';
                weaponIcons[2].style.color = '#eee7e7';
                weaponIcons[3].style.color = '#eee7e7';
                weaponIcons[4].style.color = '#eee7e7';
                playerSelection = 'rock';
            } else if (weapon.classList.contains('.paper-button')) {
                weaponIcons[0].style.color = '#eee7e7';
                weaponIcons[1].style.color = '#b96b78';
                weaponIcons[2].style.color = '#eee7e7';
                weaponIcons[3].style.color = '#eee7e7';
                weaponIcons[4].style.color = '#eee7e7';
                playerSelection = 'paper';
            } else if (weapon.classList.contains('.scissors-button')) {
                weaponIcons[0].style.color = '#eee7e7';
                weaponIcons[1].style.color = '#eee7e7';
                weaponIcons[2].style.color = '#f1d56c';
                weaponIcons[3].style.color = '#eee7e7';
                weaponIcons[4].style.color = '#eee7e7';
                playerSelection = 'scissors';
            } else if (weapon.classList.contains('.lizard-button')) {
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
        });
    });
}