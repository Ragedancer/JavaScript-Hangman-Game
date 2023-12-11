let word = 'falcon';
let wordsLines = [];
let guessLetter;
let answerLines;

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
    let tmpwrd = displayGuessWord();
    answerLines.innerHTML = tmpwrd;

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
    answerLines = document.getElementById('answerInLines');
    for(const l of word){
        wordsLines.push('_');
    }
    let genwrd = displayGuessWord();
    answerLines.innerHTML = genwrd;
    console.log('Generate lines for words', answerLines);
}

