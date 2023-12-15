let word;
let wordsLines = [];
let answerLines;
let wrongGuess;
let alreadyGuessed = "";



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

function checkForWin(){
    if(!wordsLines.includes('_')){
        alert("You won the game! Thats great! Wanna play again?");
        location.reload();
        }
    }


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

function loseGame(){
 alert("You lost the game! The guess word was ",word, " Wanna play again?");
        location.reload();
    }


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

function displayGuessWord(){
    let tempWord = '';
    wordsLines.forEach(l =>{
        tempWord += l + ' ';
    });
    console.log(tempWord);
    return tempWord;

    
}

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
listenerForClick();