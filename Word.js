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
    this.toString = function (){
        var output = "";
        // return a string that is either dashes, letters or a mix
        for (var i = 0; i < this.letters.length; i++) {
            output+=this.letters[i].returnLetter();
        }
        return output;
    };
}
// try to put in key up function to indicate what guess is supposed to be
// window.addEventListener("keydown", function (guess) {
        // use letter constructor to check input and return
        // for (var i = 0; i < this.letters.length; i++) {
            // take character argument and call guess func on each letter obj
//             Letter.guess(guess);
//             Letter.returnLetter(guess);
//         }
//     });
// };

// var animal = new Word("elephant");
// console.log(animal);

// var object = new Letter("l", true);
// Letter.returnLetter();

module.exports = Word;