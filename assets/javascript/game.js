

//defining variables
var wins = 0;
var losses = 0;
var guessesleft = 5;
var guesses = [];


//creating store of alaphebits for computer to reference
/*
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphaLength = alpha.length;
var compLetter = Math.floor(Math.random() * 25); 
*/

var alpha = ["a","b","c"];
var alphaLength = alpha.length;
var compLetter = Math.floor(Math.random() * 2); 

//looking for key stroke and outputting it as console.log
var userinput;
var i= 0;
document.addEventListener('keypress', (event) => {
    var keyName = event.key;
    i = i +1;
    userinput = keyName.toLowerCase();
    console.log(userinput);
    console.log(i);
  });


//comparing user input to computer input
    
    if(userinput === alpha[compLetter]){
        wins = wins + 1;
        i = 0;
        guessesleft = 5;
    }

    else{
        guessesleft = guessesleft - 1;
        alert("your out of guesses" + "I was thinking of " + alpha[compLetter]);

    };
    


//Will work on this






