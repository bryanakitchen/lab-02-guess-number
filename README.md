# lab-02-guess-number

## Steps

### Make a New Branch

Be on `main` and make a new branch for today's lab (like
`git checkout -b dev`)

### Design the App

Using HTML and CSS, design the look and feel of the guessing game. At a minimum you will need:
1. Page layout (title, header, etc.)
1. Explain the rules to the user
1. An input of type number for specifying the guess
1. A button to click to submit the guess
1. Display of number of tries remaining
1. Display of guess too high or too low
1. Display of lose and win result

### TDD `compareNumbers` Function

We will need to know whether the user's guess is correct, too low, or too high.

TDD a `compareNumbers` function that:
1. Has two parameters: `guess` and `correctNumber`
1. Returns one of the following values:
   - `0` - the numbers are identical
   - `-1` - the guessed number is too low
   - `1` - the guessed number is too high

Write one test at a time, each test should address one of the three possible outcomes.

You can assume _valid input_, meaning the passed input will always be a number.

SUPER STRETCH: Actually test for invalid input. You should throw an error if either parameter is not a number. Consult the QUnit docs for how to test for an exception.

### App

Add an `app.js` file that is included via `<script>` tag.

Basic module structure:
1. Get and store into variables all the DOM elements you will need to either
read or write from.
2. Define variables and initial values for "state". Be aware of whether the values will change over the life of the App (`let`) or will stay the same (`const`). 
   - Don't forget to define a variable with the correct number!
3. Define an event handler functions on appropriate DOM element(s).

Basic Logic Flow:

1. Convert guess to a number
1. Compare guessed number to actual number using `compareNumbers`
   - Guess too high or low?
      1. Display message
      1. Decrement tries remaining
         - No tries remaining?
            1. Display lose message
            1. Disable game play
   - Correct guess?
      1. Display win message
      1. Disable game play

### STRETCH

#### Random Number

Generate the number to guess randomly. Checkout [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) which include examples. You _can_ copy an example function, just make sure to:
1. Attribute MDN using a comment above the function
1. Make code match your project code style
1. Remove unneeded parts of the code (if any)

#### Functions as Unit of Work

Move UI work into functions for discrete UI updating tasks:
1. Decrementing tries
1. Display of too low message
1. Display of too high message
1. Disable game play
1. Display of Lose Game
1. Display of Win Game

---

## Points Break Down

Looking For | Points (10)
:--|--:
Hosted on GitHub with URL in About section, correct and Idiomatic HTML and CSS | 2 
TDD Compares Number Function | 2
Correct Game Logic with random correct number | 2
Project and code files are: indented / spaced correctly / clean | 2
Clear commit history present | 2 
Reset button lets user play again | +1
Refactor UI Work to Functions | +1