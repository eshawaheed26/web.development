function LetterFinder(word,match){
    for (var counter=0; counter<word.length; counter++){
        if(word[counter]===match){
            console.log("Found the",match,"at",counter);
        }
        else{
            console.log("No match found",counter)
        }
    }
} LetterFinder("EshaWajeeha","W");