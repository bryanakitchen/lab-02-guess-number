// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('This test should return 0 if the number guessed is correct.', (expect) => {
    
    const guess = 4;
    const correctNumber = 4;
    
    const expected = 0;
    const actual = compareNumbers(guess, correctNumber);

    expect.equal(actual, expected);
});

test('This test should return -1 if the number guessed is too low.', (expect) => {
    
    const guess = 3;
    const correctNumber = 4;
    
    const expected = -1;
    const actual = compareNumbers(guess, correctNumber);

    expect.equal(actual, expected);
});

test('This test should return 1 if the number guessed is too high.', (expect) => {
    
    const guess = 5;
    const correctNumber = 4;
    
    const expected = 1;
    const actual = compareNumbers(guess, correctNumber);

    expect.equal(actual, expected);
});
