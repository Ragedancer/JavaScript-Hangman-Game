let word;
let wordsLines = [];
let answerLines;
let wrongGuess;
let alreadyGuessed = "";


//When the user presses enter and has a value entered, then this code checks to see if the letter has been guessed.
//If the letter has been guessed, it returns a message saying that then waits for the user to enter another value
//Once the value is input, the code checks to see if the letter exists throughout the word, if it does, it replaces the _ with the letter
//if the letter is not in the word, it increases the wrong score, then we display the hangman based on the wrong score
//and then we check if the users won
function confirmValue(){
    let guessLetter = document.getElementById('guessLetter').value.toLowerCase();
    if(alreadyGuessed.includes(guessLetter)){
        alert("This has been guessed");
        document.getElementById('guessLetter').value = "";
        return;
    }
    else{
        alreadyGuessed += guessLetter;
    }
    console.log('temp word lines, prior to for loop',wordsLines);
    for(let i =0;i<word.length;i++){
         if(guessLetter == word[i]){
           wordsLines[i] = guessLetter;
        }
    }
    if(!word.includes(guessLetter)){
            wrongGuess++;
        }
    
    displayHangman();
    answerLines.innerHTML = displayGuessWord();
    document.getElementById('guessLetter').value = "";
    setTimeout(checkForWin,2000);
}
//Code to check if the user won, based on if there are any more underscores in the display field on the page

function checkForWin(){
    if(!wordsLines.includes('_')){
        alert("You won the game! Thats great! Wanna play again?");
        location.reload();
        }
    }

//displays the hangman based on the wrongscore, goes from 0 - 6, starts at 0, then at 6 it shows the last body part and tells the user they lost
function displayHangman(){
    console.log('displayHangman');
    switch (wrongGuess) {
        case 1:
            console.log('unhideHead');
            unhideHead();
          break;
          case 2:
            console.log('unhideTorso');
            unhideTorso();
          break;
          case 3:
            console.log('unhideLeftArm');
            unhideLeftArm();
          break;
          case 4:
            console.log('unhideRightArm');
            unhideRightArm();
          break;
          case 5:
            console.log('unhideLeftLeg');
            unhideLeftLeg();
          break;
          case 6:
            console.log('unhideRightLeg');
            unhideRightLeg();
            setTimeout(loseGame,2000);
          break;
      }
}

//this code doesnt check if the user lost, it just displays that the user lost and reloads the page
function loseGame(){
 alert("You lost the game! The guess word was: " + word + " Wanna play again?");
        location.reload();
    }

//All unhide...() functions remove the class in the html where the value is "hidden", in the CSS hidden is set to hide the div the class is associated to
function unhideHead(){
    let head = document.getElementById("head");
    head.classList.remove("hidden");
}

function unhideTorso(){
    let torso = document.getElementById("torso");
    torso.classList.remove("hidden");
}

function unhideLeftArm(){
    let leftArm = document.getElementById("leftArm");
    leftArm.classList.remove("hidden");
}
function unhideRightArm(){
    let rightArm = document.getElementById("rightArm");
    rightArm.classList.remove("hidden");
}

function unhideLeftLeg(){
    let leftLeg = document.getElementById("leftLeg");
    leftLeg.classList.remove("hidden");
}


function unhideRightLeg(){
    let rightLeg = document.getElementById("rightLeg");
    rightLeg.classList.remove("hidden");
}

//Displays the guess word by reading out the values in the wordLines array
function displayGuessWord(){
    let tempWord = '';
    wordsLines.forEach(l =>{
        tempWord += l + ' ';
    });
    console.log(tempWord);
    return tempWord;

    
}

//Runs when body loads, API curl call for word, then generates the lines based on how many letters in word
async function generateLinesForWord(){
    const resp = await fetch("https://random-word-api.herokuapp.com/word");
    const diction = await resp.json();
    word = diction[0];
    console.log('Guess word: ', word);
    wrongGuess = 0;
    answerLines = document.getElementById('answerInLines');
    for(const l of word){
        wordsLines.push('_');
    }
    answerLines.innerHTML = displayGuessWord();
    console.log('Generate lines for words', answerLines);
}

//When the user types in a letter, if the user presses enter, clicks the button like the user would
function listenerForClick(){
    let input = document.getElementById("guessLetter");
    console.log(input);
    input.addEventListener("keypress",function(event){
        if(event.key === "Enter"){
            //event.preventDefault();
            document.getElementById('buttonForGuess').click();
        }
    });
}

//this runs the listener when the page loads
listenerForClick();