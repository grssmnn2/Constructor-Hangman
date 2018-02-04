// this file requires Word.js
var Word = require("./Word.js");
// require prompt package
var prompt = require('prompt');

// array of animals
var gameWords = ["rabbit", "dog", "squirrel", "whale", "chipmunk", "pigeon", "aardvark", "hedgehog", "gorilla"];
// choose random animal from array
var randomWord = gameWords[Math.floor(Math.random()*gameWords.length)];
// use Word.js to store value of randomWord


// prompt user for guess and keep track of user's remaining guess
var schema = {
    properties: {
      userGuess: {
        pattern: /^[a-zA-Z\s]+$/,
        message: 'Guess must be only a letter',
        required: true
      }
    }
  }; 
  // Start the prompt 
  prompt.start(); 
  prompt.get(schema, function (err, result) {
    // Log the results.
   // store guesses in an array
    var guesses = [];
    guesses.push(result.userGuess);
    console.log('  Guesses So Far: ' + guesses);
  });