/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(text) {
        this.text = text.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseContainer = document.querySelector('#phrase ul');
        const fragment = document.createDocumentFragment();

        this.text.split('').forEach(character => {
            const listItem = document.createElement('li');
            listItem.textContent = character;
            if (character === ' ') {
                listItem.className = 'space';
            } else {
                listItem.className = `hide letter ${character}`;
            }
            fragment.appendChild(listItem);
        });

        phraseContainer.appendChild(fragment);
    }

    checkLetter(letter) {
        const phraseLetters = [...document.querySelectorAll('#phrase ul li')];
        return phraseLetters.filter(li => li.textContent === letter);
    }

    showMatchedLetter(listItem) {
        listItem.classList.remove('hide');
        listItem.classList.add('show');
    }
}
