// need to require Letter.js
var Letter = require('./Letter.js')

function Word(randomWord) {
    // randomWord input
    this.randomWord = randomWord;
    // array of letters that will hold either dashes or letters
    this.letters = [];
    this.check = function () {
        // use letter constructor to check input and return
        for (var i = 0; i < this.letters.length; i++) {
            // take character argument and call guess func on each letter obj
            Letter.guess(this.letters[i]);
        }
    }
};

// auto run toString by using prototype function
Word.prototype.toString = function () {
    for (var i = 0; i < this.randomWord.length; i++) {
        // use Letter constructor to check each letter in randomword and push to array
        // display "-" or actual letter depending on constructor output
        Letter.returnLetter(this.randomWord[i]);
        this.letters.push(new Letter(this.randomWord[i]));
    }
    this.letters.join();
}
// var object = new Letter("l", true);
// Letter.returnLetter();

module.exports = {
    Word: Word
};