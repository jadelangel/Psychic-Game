

//defining variables
var wins = 0;
var losses = 0;
var guessesleft = 5;
var guesses = [];


//creating store of alaphebits for computer to reference

var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphaLength = alpha.length;
var compLetter = Math.floor(Math.random() * 25); 


//looking for key stroke and outputting it as console.log
var userinput;

document.addEventListener('keypress', (event) => {
    var keyName = event.key;
    userinput = keyName.toLowerCase();
    console.log(userinput);
  });


//



