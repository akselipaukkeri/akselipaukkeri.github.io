window.onload = function(){

  var guess = document.getElementById("number").value;
document.getElementById('button').addEventListener("click", function(){
     guess = document.getElementById("number").value;
    guessTheNumber(guess);

});

var x = getRandomInteger();

    
    console.log(x);
    
function getRandomInteger() {
    var randomInteger = Math.floor((Math.random() * 10) + 1);
return randomInteger;
}

 

 function guessTheNumber(guess) {
     
    
    if ( 1 > guess || guess>10) {
        alert("Give a number between 1 and 10");
    }
     else if ( guess%1 != 0){
         alert("Give an integer")
     }
     
    else {
        if( x==guess) {
        alert("Correct!");
    }
    else  {
        alert("Try again");
    }
   
     x = getRandomInteger()
     console.log(x)
    
   }
 }
}