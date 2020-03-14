let gameOver = false
let tries = 0;
let randomNumber = Math.floor( Math.random() * 100 + 1 );
//console.log(randomNumber)

// HTML Elements
let buttonPlayAgain = document.getElementById('buttonPlayAgain');
let buttonGuess = document.getElementById('buttonGuess');
let inputField = document.getElementById('inputField');
let outputLabel = document.getElementById('outputLabel');
let  inputFieldLabel = document.getElementById('inputFieldLabel');

buttonGuess.addEventListener('click', guessBtnClicked);
buttonPlayAgain.addEventListener('click', playAgainBtnClicked);

buttonPlayAgain.style.display = 'none';

function guessBtnClicked(e) {
    tries += 1;

    if(inputField.value > randomNumber && inputField.value <= 100) {
        //outputLabel.style.display = 'block';
        outputLabel.style.color = 'orange';
        outputLabel.style.background = 'white';
        outputLabel.style.fontStyle = 'bold';
        outputLabel.innerText = "The correct number is SMALLER than the number you entered!";
    } else if (inputField.value < randomNumber && inputField.value > 0) {
        //outputLabel.style.display = 'inline';
        outputLabel.style.background = 'white';
        outputLabel.style.color = 'red';
        outputLabel.style.fontStyle = 'bold';
        outputLabel.innerText = "The correct number is BIGGER than the number you entered!";
    } else if (inputField.value == randomNumber){
        //outputLabel.style.display = 'inline';
        outputLabel.style.background = 'white';
        outputLabel.style.color = 'green';
        outputLabel.style.fontStyle = 'bold';
        outputLabel.innerText = `CONGRATULATIONS! You guessed the correct number after ${tries} tries. Correct Number: ${randomNumber}`;


        buttonPlayAgain.style.display = 'inline';
        buttonGuess.style.display = 'none';
        inputField.style.display = 'none';
        inputFieldLabel.style.display = 'none';
    } else {
        outputLabel.style.background = 'red';
        outputLabel.style.color = 'white';
        outputLabel.style.fontStyle = 'bold';
        outputLabel.innerText = `Error: The number you entered is either not in the range of 1-100 or not a number at all! PLEASE TRY AGAIN AND ENTER A CORRECT NUMBER FROM 1 TO 100!`;1
    }

}

function playAgainBtnClicked(e){
    tries = 0;
    randomNumber = Math.floor( Math.random() * 100 + 1 );

    buttonPlayAgain.style.display = 'none';
    buttonGuess.style.display = 'inline';
    inputField.style.display = 'inline';
    inputFieldLabel.style.display = 'inline';
    outputLabel.innerText = "";
}
