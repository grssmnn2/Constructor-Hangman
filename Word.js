// need to require Letter.js
var Letter = require('./Letter.js')

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
    this.toString = function () {
        var output = "";
        // return a string that is either dashes, letters or a mix
        for (var i = 0; i < this.letters.length; i++) {
            output += this.letters[i].returnLetter();
        }
        return output;
    };
    // take a character input and call guess function on each letter object
     this.guess = function (guess) {
       for (var i = 0; i<this.letters.length; i++){
           if(guess === this.letters[i]){
            this.letters[i].letterGuessed = true;
              
           }
           return true;
       }
      
    }
}

module.exports = Word;