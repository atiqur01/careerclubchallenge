
//- Start Challenge 1

// Set Player Name Height Age
let firstPlayerName = "Rose";
let firstPlayerHeight = 173.736;
let firstPlayerAge = 18;
let firstPlayerScore = (firstPlayerHeight + (firstPlayerAge*5));

let secondPlayerName = "Jack";
let secondPlayerHeight = 173.736;
let secondPlayerAge = 22;
let secondPlayerScore = (secondPlayerHeight + (secondPlayerAge*5));

let rafareeName = "Pondit";

function whoWins(){
    if(firstPlayerScore > secondPlayerScore){
       console.log(`Rafaree ${rafareeName} Declared WINNER: ${firstPlayerName} and Score is ${firstPlayerScore}.`);
       }else if(firstPlayerScore == secondPlayerScore){
           console.log(`Rafaree ${rafareeName} Declared WINNER: Both Player ${firstPlayerName} and ${secondPlayerName}.`);
       }else{
           console.log(`Rafaree ${rafareeName} Declared WINNER: ${secondPlayerName} and Score is ${secondPlayerScore}.`);
       }
}

whoWins();

