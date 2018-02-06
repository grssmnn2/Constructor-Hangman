// this file requires Word.js
var Word = require("./Word.js");
// require inquirer package
var inquirer = require('inquirer');

// THIS PAGE CHOOSES RANDOM WORD, STORES IN WORD CONSTRUCTOR
// PROMPTS USER FOR GUESS AND KEEPS TRACK OF GUESSES


// array of animals
var gameWords = ["rabbit", "dog", "squirrel", "whale", "chipmunk", "pigeon", "aardvark", "hedgehog", "gorilla"];
// choose random animal from array
Word.randomWord = gameWords[Math.floor(Math.random()*gameWords.length)];
// guesses left is length of answer + 5
var guessesLeft = Word.randomWord.length + 5;
// array to hold user guesses
var guesses = [];
// use Word.js to store value of randomWord 

// unless user has run out of guesses, keep asking for new input
function ask(){
if (guessesLeft > 0){
  console.log(Word.randomWord);
  console.log("You have " + guessesLeft + " guesses left.");
// prompt user for guess and keep track of user's remaining guess
  inquirer.prompt([
    {
      message: "Type a letter to make a guess.",
      name: "userGuess"
      // validate: function validateGuess(userGuess){
      //   return userGuess !== /^[a-zA-Z\s]+$/;
      // }
  } 
]).then(function(answers){
    var storage = new Word (answers.userGuess);
    guessesLeft--;
    guesses.push(storage);
    ask();
  });
}else{
  console.log("Better luck next time.");
}

};
ask();
