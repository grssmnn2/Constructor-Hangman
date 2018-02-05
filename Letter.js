function Letter(character) {
    // string value to hold character for letter
    this.character = character;
    // boolean value to store if letter has been guessed yet
    this.guessed = false;
    // returns letter if guessed, or shows all underscores if not guessed
    this.returnLetter = function(character){
        for(var i=0; i<randomWord[i].length; i++)
            randomWord[i]="-";
            console.log(randomWord);
        if(this.character===randomWord[i]){
            randomWord[i]===this.character
        }
    }
    this.guess= function(character){
        // takes character as argument and checks it against underlying character
        if(this.character !== lettersInWord){
        //    show entire word as dashes, add user guess to incorrect guesses
            this.guessed=false;
        }else{
            // show letter guessed instead of underscore
            this.guessed=true;

        }
        // update boolean value to true if guessed correctly
    }

};

// EXPORT MODULE anything Word.js needs
exports.module = {

};

