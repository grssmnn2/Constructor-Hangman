function Letter(letter) {
    // string value to hold letter in word selected
    this.letter = letter;
    // boolean value to store if letter has been guessed yet (initially false)
    this.letterGuessed = false;
    // returns letter if guessed is true, or shows all underscores if guessed is false
    this.guess = function (guess){
        // if guess matches the letter in the word
        if(this.letter===guess){
            // changer letterGuessed to true
            this.letterGuessed=true;
        }
    };
    this.returnLetter = function (){
        console.log(this.letter);
        // if the letter has been guessed
        if (this.letterGuessed){
            // display it
            return this.letter;
            
        }else{
            // else show dash
            return "-";
        }
    };

   
};

module.exports = {
    Letter: Letter
};

