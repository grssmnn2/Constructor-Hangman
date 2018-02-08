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
// guesses left is length of answer + 3
var guessesLeft = Word.randomWord.length + 3;
// array to hold user guesses
var guesses = [];
// use Word.js to store value of randomWord 

// unless user has run out of guesses, keep asking for new input
function ask(){
  console.log(Word.letters);
// prompt user for guess and keep track of user's remaining guess
  inquirer.prompt([
    {
      message: "Type a letter to make a guess.",
      name: "userGuess",
      type: "input",
      // validate: function (value){
      //   var alpha = /^[a-zA-Z]+$/;
      //   if(value===alpha && value.length===1){
      //     return true;
      //   }
      //     console.log(" Please only enter a letter.");
      //   }
      }
]).then(function(answers){
    var storage = answers.userGuess;
    if (guessesLeft > 0){
    guesses.push(storage);
    guessesLeft--;
    console.log("You have " + guessesLeft + " guesses left.");
    console.log("Already guessed: " + guesses);
    ask();
    // else if guesses left is 0 and user didnt guess word
    // tell them game over
    // else YOU WIN!!!
  }else{
    console.log("Better luck next time!");
  }
});
}
ask();
