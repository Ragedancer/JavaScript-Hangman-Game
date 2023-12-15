let word;
let wordsLines = [];
let answerLines;
let wrongGuess;



function confirmValue(){
    let guessLetter = document.getElementById('guessLetter').value.toLowerCase();
    
    console.log('temp word lines, prior to for loop',wordsLines);
    for(let i =0;i<word.length;i++){
         if(guessLetter == word[i]){
           wordsLines[i] = guessLetter;
        }
    }
    if(!word.includes(guessLetter)){
        console.log("Hitting first one",wrongGuess);
            wrongGuess++;
        }
    displayHangman();
    answerLines.innerHTML = displayGuessWord();
    document.getElementById('guessLetter').value = "";
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
          break;
      }
}


function unhideHead(){
    console.log("am her");
    let head = document.getElementById("head");
    console.log("before", head,head.classList);
    head.classList.remove("hidden");
    console.log("after",head,head.classList);
}

function unhideTorso(){
    let torso = document.getElementById("torso");
    console.log("before", torso,torso.classList);
    torso.classList.remove("hidden");
    console.log("after",torso,torso.classList);
}

function unhideLeftArm(){
    let leftArm = document.getElementById("leftArm");
    console.log("before", leftArm,leftArm.classList);
    leftArm.classList.remove("hidden");
    console.log("after",leftArm,leftArm.classList);
}
function unhideRightArm(){
    let rightArm = document.getElementById("rightArm");
    console.log("before", rightArm,rightArm.classList);
    rightArm.classList.remove("hidden");
    console.log("after",rightArm,rightArm.classList);
}

function unhideLeftLeg(){
    let leftLeg = document.getElementById("leftLeg");
    console.log("before", leftLeg,leftLeg.classList);
    leftLeg.classList.remove("hidden");
    console.log("after",leftLeg,leftLeg.classList);
}


function unhideRightLeg(){
    let rightLeg = document.getElementById("rightLeg");
    console.log("before", rightLeg,rightLeg.classList);
    rightLeg.classList.remove("hidden");
    console.log("after",rightLeg,rightLeg.classList);
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