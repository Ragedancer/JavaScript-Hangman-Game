let word = 'falcon';
let wordsLines = [];
let guessLetter;
let answerLines;

function generateLinesForWord(){
    answerLines = document.getElementById('answerInLines');
    for(const l of word){
        wordsLines.push('_');
    }
    answerLines.innerHTML = wordsLines;
}

function setAnswerLines(tempLine){
    answerLines.innerHTML = tempLine;
}
function confirmValue(){
    guessLetter = document.getElementById('guessLetter').value;
    let i = 0;
    let tempWordLines = answerLines;
    for(const l of word){
        if(guessLetter != l){
            i++;
            console.log('If statement',guessLetter,word,i,tempWordLines);
        }
        else if(guessLetter == l){
           tempWordLines = [wordsLines.slice(0,i),guessLetter,wordsLines.slice(i)];
            i++;
            console.log('Else if statement',guessLetter,word,i,tempWordLines);
        }

    }
    setAnswerLines(tempWordLines);

}