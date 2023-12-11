let word = 'teeth';
let wordsLines = [];
let guessLetter;
let answerLines;
let wrongGuess;

function confirmValue(){
    guessLetter = document.getElementById('guessLetter').value;
    let i = 0;

    console.log('temp word lines, prior to for loop',wordsLines);
    for(const l of word){
        if(guessLetter != l){
            i++;
        }
        else if(guessLetter == l){
           wordsLines[i] = guessLetter;
            i++;
        }
    }
    if(!word.includes(guessLetter)){
        console.log("Hitting first one",wrongGuess);
            wrongGuess++;
        }
    displayHangman();
    let tmpwrd = displayGuessWord();
    answerLines.innerHTML = tmpwrd;

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

function generateLinesForWord(){
    wrongGuess = 0;
    answerLines = document.getElementById('answerInLines');
    for(const l of word){
        wordsLines.push('_');
    }
    let genwrd = displayGuessWord();
    answerLines.innerHTML = genwrd;
    console.log('Generate lines for words', answerLines);
}

