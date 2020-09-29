// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const userInput = document.getElementById('user-input');
const startButton = document.getElementById('start-button');
const guessesRemaining = document.getElementById('guesses-remaining');
const winLoss = document.getElementById('win-loss');
const messageBox = document.getElementById('message-box');

const correctAnswer = Math.floor(Math.random() * 20);

let totalWin = 0;
let totalGuesses = 4;

// initialize state
startButton.addEventListener('click', () => {
    const userNumber = Number(userInput.value);
    
    totalGuesses--;
    
    winLoss.textContent = totalWin;
    guessesRemaining.textContent = totalGuesses;
    
    if (compareNumbers(userNumber, correctAnswer) === 0) {
        totalWin++;
        messageBox.textContent = 'Congrats! You win!';
        return;
    } else if (compareNumbers(userNumber, correctAnswer) === -1) {
        messageBox.textContent = 'Your guess is too low. Please try again';
    } else if (compareNumbers(userNumber, correctAnswer) === 1) {
        messageBox.textContent = 'Your guess is too high. Keep trying!';
    }
    
    if (totalGuesses === 0) {
        messageBox.textContent = 'Sorry. You\'re out of guesses. Better luck next time!';
    }
});
// set event listeners to update state and DOM
console.log(totalGuesses, totalWin);
