// this file requires Word.js
var Word = require("./Word.js");
// require inquirer package
var inquirer = require('inquirer');
// array of animals
var gameWords = ["rabbit", "dog", "squirrel", "whale", "chipmunk", "pigeon", "aardvark", "hedgehog", "gorilla"];
// choose random animal from array and store with Word.js
var randomWord = gameWords[Math.floor(Math.random()*gameWords.length)];
var newWord = new Word(randomWord);
// guesses left is length of answer + 3
var guessesLeft = randomWord.length + 3;
// array to hold user guesses
var guesses = [];
// unless user has run out of guesses, keep asking for new input
function ask(){
  console.log(newWord.toString());
// prompt user for guess and keep track of user's remaining guess
  inquirer.prompt([
    {
      message: "Type a letter to make a guess.",
      name: "userGuess",
      type: "input"
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
      if (guessesLeft > 0 && guesses.indexOf(storage)=== -1){
        guesses.push(storage);
        newWord.checkGuess(storage);
        guessesLeft--;
        console.log("You have " + guessesLeft + " guesses left.");
        console.log("Already guessed: " + guesses);
        ask();
    } else if(guessesLeft > 0 && guesses.indexOf(storage)!= -1){      
        console.log("You've already guessed that letter.");
        ask();
    } else if(guessesLeft>0 && randomWord.indexOf(" - ")===-1){
        console.log("You win!");
    }
    else{
        console.log("Better luck next time!");
    }
  });
}

ask();
