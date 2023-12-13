let word;
let wordsLines = [];
let answerLines;
let wrongGuess;



function confirmValue(){
    let guessLetter = document.getElementById('guessLetter').value;
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

}


function displayHangman(){
    let body = document.getElementById('bodyOutput');
    let gameOutput;
    switch (wrongGuess) {
        case 1:
          gameOutput = "head";
          break;
          case 2:
          gameOutput = "head,torso";
          break;
          case 3:
          gameOutput = "head,torso,arm1";
          break;
          case 4:
          gameOutput = "head,torso,arm1,arm2";
          break;
          case 5:
          gameOutput = "head,torso,arm1,arm2,leg1";
          break;
          case 6:
          gameOutput = "head,toso,arm1,arm2,leg1,leg2";
          console.log("You lose");
          break;
        default:
          gameOutput = "aint no body yet";
      }
body.innerHTML = gameOutput;
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