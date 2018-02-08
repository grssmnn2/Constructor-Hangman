function Letter(letter) {
    // string value to hold character for letter
    this.letter = letter;
    // boolean value to store if letter has been guessed yet (initially false)
    this.letterGuessed = false;
    // returns letter if guessed is true, or shows all underscores if guessed is false
    this.returnLetter = function (){
        console.log(this.letter);
        if (this.letterGuessed){
            return this.letter;
            
        }else{
            return "-";
        }
    };

    this.guess = function (character){
        // if letter matches character
        if(this.letter===character){
            this.letterGuessed=true;
        }
    };
};
// EXPORT MODULE anything Word.js needs
module.exports = {
    Letter: Letter
};

