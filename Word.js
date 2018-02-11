// need to require Letter.js
var Letter = require('./Letter.js');

function Word(randomWord) {
    // randomWord input
    this.randomWord = randomWord;
    // array of letters that will hold either dashes or letters
    this.letters = [];
    for (var i = 0; i < this.randomWord.length; i++) {
        // use Letter constructor to check each letter in randomword and push to array
        // display "-" or actual letter depending on constructor output
        this.letters.push(new Letter(this.randomWord[i]));
    }
    // take a character input and call guess function on each letter object
    this.checkGuess = function (guess) {
        var checkUserInput = new Letter(guess);
            checkUserInput.guess(guess);
    }
    this.toString = function () {
        var output = "";
        // return a string that is either dashes, letters or a mix
        for (var j = 0; j < this.letters.length; j++) {
            output += this.letters[j].returnLetter();
        }
        return output;
    };

}

module.exports = Word;