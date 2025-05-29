/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('once in a blue moon'),
            new Phrase('a piece of cake'),
            new Phrase('break the ice'),
            new Phrase('hit the road'),
            new Phrase('under the weather')
        ];
        this.activePhrase = null;
    }

    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }

    handleInteraction(button) {
        button.setAttribute('disabled', '');
        const matchedLetters = this.activePhrase.checkLetter(button.textContent);

        if (matchedLetters.length > 0) {
            button.classList.add('chosen');
            matchedLetters.forEach(letter => this.activePhrase.showMatchedLetter(letter));
            if (this.checkForWin()) {
                this.gameOver('win');
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    removeLife() {
        this.missed++;
        if (this.missed === 5) {
            this.gameOver('lose');
            return false;
        }
        const heart = document.querySelector(`img[src*='liveHeart']`);
        if (heart) heart.src = 'images/lostHeart.png';
    }

    checkForWin() {
        return document.querySelectorAll('#phrase ul li.hide').length === 0;
    }

    gameOver(status) {
        const overlay = document.querySelector('#overlay');
        const heading = document.querySelector('#overlay > h1');
        const subheading = document.querySelector('#overlay > h2');

        overlay.style.display = 'flex';
        if (subheading) subheading.remove();

        overlay.className = status === 'win' ? 'win' : 'lose';
        heading.textContent = status === 'win' 
            ? 'CONGRATULATIONS! YOU WON!' 
            : 'GAME OVER! TRY AGAIN?';
    }
}
