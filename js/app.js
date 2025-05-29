/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startBtn = document.getElementById('btn__reset');
const onScreenKeyboard = document.getElementById('qwerty');

let currentGame;

function resetGameBoard() {
    // Remove all phrase letters from the display
    const phraseList = document.querySelector('#phrase ul');
    phraseList.replaceChildren();

    // Reset all keyboard buttons
    const keys = onScreenKeyboard.querySelectorAll('button');
    keys.forEach(key => {
        key.className = 'key';
        key.removeAttribute('disabled');
    });

    // Reset all heart images to live hearts
    const lostHearts = document.querySelectorAll('img[src*="lostHeart"]');
    lostHearts.forEach(img => img.src = 'images/liveHeart.png');
}

function startGame() {
    resetGameBoard();
    currentGame = new Game();
    currentGame.startGame();
}

function handleButtonClick(event) {
    if (event.target.tagName === 'BUTTON') {
        currentGame.handleInteraction(event.target);
    }
}

function handlePhysicalKeyboard({ key }) {
    const pressedKey = key.toLowerCase();

    if (/^[a-z]$/.test(pressedKey)) {
        const matchingButton = [...onScreenKeyboard.querySelectorAll('button')].find(
            btn => btn.textContent === pressedKey && !btn.disabled
        );

        if (matchingButton) {
            currentGame.handleInteraction(matchingButton);
        }
    }
}

// Event listeners
startBtn.addEventListener('click', startGame);
onScreenKeyboard.addEventListener('click', handleButtonClick);
document.addEventListener('keyup', handlePhysicalKeyboard);
