function guessTheLetter(){
    var guessLetter = document.getElementById('guessLetter').value;
    var word = 'falcon';
    for(const l of word){
        console.log(l);
    }
    console.log(guessLetter);
}