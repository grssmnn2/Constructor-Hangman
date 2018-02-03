function Letter(character, guessed) {
    this.character = character;
    this.guessed = guessed;
    this.returnLetter = function(){
        // return letter if guessed, use placeholder if not guessed
    }
    this.guess= function(character){
        // takes character as argument and checks it against underlying character
        if(this.character !== letterInWord){
        //    show entire word as dashes, add user guess to incorrect guesses
            this.guessed=false;
        }else{
            // show letter guessed instead of underscore
            this.guessed=true
        }
        // update boolean value to true if guessed correctly
    }

};