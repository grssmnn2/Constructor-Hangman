function Letter(character) {
    // string value to hold character for letter
    this.character = character;
    // boolean value to store if letter has been guessed yet (initially false)
    this.letterGuessed = false;
    // returns letter if guessed, or shows all underscores if not guessed
    this.returnLetter = function(character){
        // for the length of the random word
        for(var i=0; i<randomWord[i].length; i++)
        // every inital placeholder is "-"
            randomWord[i]="-";
            console.log(randomWord);
            // if the character matches a letter
        if(this.character===randomWord[i]){
            // change that letter from "-" to the character guessed
            randomWord[i]===this.character
            this.letterGuessed=true;
        }
    }
};

// EXPORT MODULE anything Word.js needs
exports.module = {
    Letter: Letter
};

