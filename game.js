var prompt = require("prompt")
var Word = require("./word.js")

game = {
  wordBank: ["laptop","developer", "node", "javascript", "express", "mysql", "react", "angular" ],
  guessesRemaining: 10,
  currentWrd: null,
  startGame: function(wrd){
    word()
  }
};