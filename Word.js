// need to require Letter.js
var Letter = require('./Letter.js')
var Index = require('./index.js');

function Word (){
    // array representing the letters of underlying word
    this.letterArr = Index.randomWord.split("");
    // function that returns string representing the word. Should call the function on each letter obj.
    // function is first one defined in Letter.js, display charac. or underscore and concat together
    this.wordAsString = function(){

    }
    // this is a function that takes charac as an argument and calls guess function on each letter
    // object, (second function defined in Letter.js)
    this.guess2 = function(){

    }
}

// EXPORT MODULE anything index.js needs
exports.module = {

};