// need to require Letter.js
var Letter = require('./Letter.js')

function Word(randomWord) {
    // randomWord input
    this.randomWord = randomWord;
    // array of letters that will hold either dashes or letters
    this.letters = [];
    // function to take character argument and use letter.js func on each letter obj
    this.check = function(){
       Letter.guess();
    };
};
// auto run toString by using prototype function
Word.prototype.toString = function () {
    for (var i = 0; i < this.randomWord.length; i++) {
        // use Letter constructor to check each letter in randomword and push to array
        // display "-" or actual letter depending on constructor output
        Letter.returnLetter(this.randomWord[i]);
        this.letters.push(new Letter(this.randomWord[i]));
        // return array as string
        this.letters.join();
       
    }
}

// var object = new Letter("l", true);
// Letter.returnLetter();

module.exports = {
    Word: Word
};