//Let's make sure that it is working...
console.log('Welcome to Hangman!')

//first, we need to set variables
const lives = 0;
var word = '';
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
's','t','u','v','w','x','y','z']

//Select a random word below..
var wordSelection = ['Kim Kardashian', 'Kylie Jenner', 'Rihanna'];
var word = wordSelection[Math.floor(Math.random() * wordSelection.length)];
var wordContainer = document.getElementsByClassName('word-container')[0];




//for loop to cycle through words in array
var answers = [];
for (var i = 0; i  < word.length; i++) {
    answers[i] = "_ ";
    wordContainer.innerHTML += answers[i]
    
}
var remaining = word.length;
document.body.innerHTML(answers.join(''))
console.log(answers)
// while (remaining > 0) {
//     alert(answers.join(''));
// }

var guess = prompt('Guess a letter!!');
if (guess == null) {
    //exit the game
} else if (guess.length !== 1) {
    alert('please enter in a single letter');
} else {
    //update game with guess
    for (g = 0; g < word.length; g++) {
        if (word[g] === guess) {
            answers[g] = guess;
            remaining--;
        }
    }
}

//alert(answers.join(''));
//alert("good job!!!")
// so, we need to figure out how to get the "hangman" to display. Let's use canvas..
//function to hide "start"

for (let i = 0; i < word.length; i++) {
	if (word[i] === 'e') {
		console.log(word[i])
        console.log(i)
}

}
function hideStart() {
    var x = document.getElementById("start");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var A = document.querySelector('A')
A.addEventListener('click', function(){
    wordContainer.innerHTML = "A"
})


function clickKey(k) {
    for (let i=0; i < alphabet.length; i++) 
    console.log(k)
}








window.addEventListener('keydown',function(e) {
    console.log(e)
})





//Now, we are creating buttons for our categories. 


//After the variables are created, we can use a function to create a playing area