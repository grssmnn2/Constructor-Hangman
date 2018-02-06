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
    this.wordAsString = function(randomWord){
        // initially array holds as many dashes as letters in word
        for (var i = 0; i<this.randomWord.length; i++){
            this.letters[i]="-";
            // if a letter in the randomword equals a letter from user, display that letter in array
            if (this.randomWord[i]===Letter.letter){
                this.letters[i]=Letter.letter;
            }
        }
    }
    // function to take character argument and use letter.js func on each letter obj

};

// EXPORT MODULE anything index.js needs
module.exports = {
    Word: Word
};