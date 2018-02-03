// this file requires Word.js
var Word = require("Word.js");
// require inquirer package
var inquirer = require('inquirer');
// require prompt package
var prompt = require('prompt');

// randomly select a word and use Word constructor to store value


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
    console.log('  Guesses So Far: ' + result.userGuess);
  });

inquirer.prompt([{type: 'input'}]).then(answers => {
    // Use user feedback for... whatever!!
});