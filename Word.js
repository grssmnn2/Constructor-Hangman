// need to require Letter.js
var Letter = require('./Letter.js')

// THIS PAGE HOLDS ARRAY OF NEW LETTER OBJECTS REPRESENTING LETTERS OF UNDERLYING WORD
// A FUNCTION THAT RETURNS STRING REPRESENTING WORD. DISPLAY UNDERSCORE OR CHARAC AND CONCAT BASED ON Letter.js
// A FUNCTION THAT TAKES CHARAC AS ARGUMENT AND CALLS Letter.js GUESS FUNC ON EACH LETTER OBJ

function Word (randomWord) {
    // randomWord input
    this.randomWord = randomWord;
    // array of letters that will hold either dashes or letters
    this.letters = [];
    // function to return a string representing word
    this.wordAsString = function(){
        // initially array holds as many dashes as letters in word
        for (var i = 0; i<this.randomWord.length; i++){
            Letter.returnLetter(this.randomWord[i]);
            // to use constructor on other page, enter require variable.constructor
            this.letters.push(new Letter.Letter(this.randomWord[i]));            
            // if a letter in the randomword equals a letter from user, display that letter in array
            // otherwise display -, this comes from testing each letter in Letter constructor
            }
        };
    // function to take character argument and use letter.js func on each letter obj
    this.check = function(guess){
       Letter.guess(guess);
    };
};

// var object = new Letter("l", true);
// Letter.returnLetter();

module.exports = {
    Word: Word
};