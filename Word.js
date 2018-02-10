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
    var trueFalse = false;
    this.check = function (guess) {
       for (var i = 0; i<this.letters.length; i++){
           if(guess == this.letters[i]){
               return true;
           }
       }
       var trueFalse = false;
        // return a true or false boolean based on guess function for each letter obj.
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].guess(guess)) {
                this.letters[i].letterGuessed = true;
                trueFalse = true;
            }
        }
        return trueFalse;
    }
}

module.exports = Word;