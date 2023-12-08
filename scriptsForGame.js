let word = 'falcon';
let wordsLines = [];
let guessLetter;
let answerLines;

function confirmValue(){
    guessLetter = document.getElementById('guessLetter').value;
    //console.log(document.getElementById('answerInLines').textContent);
    let i = 0;
    let tempWordLines =  wordsLines;
    console.log('temp word lines, prior to for loop',tempWordLines);
    for(const l of word){
        if(guessLetter != l){
            i++;
           // console.log('If statement',guessLetter,word,i,tempWordLines);
        }
        else if(guessLetter == l){
           tempWordLines = [wordsLines.slice(0,i),guessLetter,wordsLines.slice(i)];
            i++;
           // console.log('Else if statement',guessLetter,word,i,tempWordLines);
        }

    }
    answerLines.innerHTML = tempWordLines;
    resetWordLines();
    //wordsLines = tempWordLines;

}

function resetWordLines(){
    console.log('Log wordLines before for loop',wordsLines);
    let num = wordsLines.length;
    for(let i = 0; i < num; i++){
        console.log('Log wordLines during for loop',wordsLines);
        wordsLines.pop();
    }
    console.log(document.getElementById('answerInLines').textContent);
    //wordsLines = document.getElementById('answerInLines').textContent; 
    console.log('Log wordLines after for loop',wordsLines);
        wordLines = [];
        for(let l of document.getElementById('answerInLines').textContent){
            if(l != ','){
                wordsLines.push(l);
            }
        }
        console.log('Log wordLines after 2nd for loop',wordsLines);
        
    }


function generateLinesForWord(){
    answerLines = document.getElementById('answerInLines');
    for(const l of word){
        wordsLines.push('_');
    }
    answerLines.innerHTML = wordsLines;
    console.log('Generate lines for words', answerLines);
}

