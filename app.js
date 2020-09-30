import { compareNumbers } from './utils.js';

const userInput = document.getElementById('user-input');
const startButton = document.getElementById('start-button');
const guessesRemaining = document.getElementById('guesses-remaining');
const winLoss = document.getElementById('win-loss');
const messageBox = document.getElementById('message-box');
const resetButton = document.getElementById('reset-button');

let correctAnswer = Math.floor(Math.random() * 20);

let totalWin = 0;
let totalGuesses = 4;

startButton.addEventListener('click', () => {
    const userNumber = Number(userInput.value);
    
    totalGuesses--;
    winLoss.textContent = totalWin;
 
    guessesRemaining.textContent = totalGuesses;
    console.log(totalGuesses, totalWin, correctAnswer);
    
    if (compareNumbers(userNumber, correctAnswer) === 0) {
        messageBox.textContent = 'Congrats! You win!';
        totalWin++;
        winLoss.textContent = totalWin;
        totalGuesses = 4;
        guessesRemaining.textContent = totalGuesses;
    } else if (compareNumbers(userNumber, correctAnswer) === -1) {
        messageBox.textContent = 'Your guess is too low. Please try again';
    } else if (compareNumbers(userNumber, correctAnswer) === 1) {
        messageBox.textContent = 'Your guess is too high. Keep trying!';
    }
    
    if (totalGuesses === 0) {
        messageBox.textContent = 'Sorry. You\'re out of guesses. Better luck next time!';
        startButton.disabled = true;
    }
});

resetButton.addEventListener('click', () => {
    correctAnswer = Math.floor(Math.random() * 20);
    totalGuesses = 4;
    guessesRemaining.textContent = totalGuesses;
})