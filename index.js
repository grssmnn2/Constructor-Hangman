// this file requires Word.js
var Word = require("./Word.js");
// require prompt package
var prompt = require('prompt');


// array of animals
var gameWords = ["rabbit", "dog", "squirrel", "whale", "chipmunk", "pigeon", "aardvark", "hedgehog", "gorilla"];
// choose random animal from array
var randomWord = gameWords[Math.floor(Math.random()*gameWords.length)];
// guesses left is length of answer + 5
var guessesLeft = randomWord.length + 5;
// array to hold user guesses
var guesses = [];
// use Word.js to store value of randomWord 

// unless user has run out of guesses, keep asking for new input
if(guessesLeft===0){
  console.log("Better luck next time.");
}else{
  ask();
  console.log("Guess a letter.");
}
// prompt user for guess and keep track of user's remaining guess
 function ask(){
  var userGuess = {
    properties: {
      Guess: {
        pattern: /^[a-zA-Z\s]+$/,
        message: 'Guess must be only a letter',
        required: true
      }
    }
  }; 
  // Start the prompt 
  prompt.start();
  // ask for letters until no more guesses remain or user guesses word
  prompt.get(userGuess, function (err, result) {
   // push user answer to guesses array
    guesses.push(result.Guess);
    // guessesLeft decreases with each guess
    guessesLeft--;
    console.log('Guesses So Far: ' + guesses);
    console.log('Guesses Left: ' + guessesLeft);
  });
  };



  module.exports = {
    randomWord: randomWord,
    guessesLeft: guessesLeft
  };