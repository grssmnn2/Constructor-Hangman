function Letter(letter) {
    // string value to hold letter in word selected
    this.letter = letter;
    // boolean value to store if letter has been guessed yet (initially false)
    this.letterGuessed = false;
    this.guess = function (userLetter) {
        if (this.letter === userLetter) {
            // if guess matches the letter in the word
            // change letterGuessed to true
            this.letterGuessed = true;
        }
        console.log(this.letter);
    };
    // returns letter if guessed is true, or shows all underscores if guessed is false
    this.returnLetter = function () {
        // if the letter has been guessed
        if (this.letterGuessed) {
            // display it
            return this.letter;
        } // else show dash
        return " - ";
    };
   
};

module.exports = Letter;

