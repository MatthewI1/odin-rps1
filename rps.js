console.log("Hello World!");


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return 'paper'
    }
    else if (num === 1) {
        return 'rock';
    } else {
        return 'scissors'
    }
}

function getResult(p1, p2) {
    if (p1 === 'rock'){
        if (p2 === 'rock'){
            return 'draw'
        } else if (p2 === 'paper') {
            return 'lose'
        } else {
            return 'win'
        }
    } else if (p1 === 'paper') {
        if (p2 === 'rock'){
            return 'win'
        } else if (p2 === 'paper') {
            return 'draw'
        } else {
            return 'lose'
        }
    } else {
        if (p2 === 'rock'){
            return 'lose'
        } else if (p2 === 'paper') {
            return 'win'
        } else {
            return 'draw'
        }
    }
}

let wins = 0;
let loses = 0;
function playGame() {
    var pcChoice = getComputerChoice();
    var userChoice = prompt("Please Choose:");
    let result =  getResult(userChoice.toLowerCase(), pcChoice);
    if (result === 'win') {
        console.log("you won!" + userChoice.toLowerCase() + " beat " + pcChoice);
        wins++;
    } else if (result === 'lose') {
        console.log("you lost." + userChoice.toLowerCase() + " loses to " + pcChoice);
        loses++;
    } else {
        console.log("draw!");
    }
}

console.log("Starting 5 games!");
playGame();
playGame();
playGame();
playGame();
playGame();
if (wins > loses) {
    console.log("you won!")
} else if (loses > wins) {
    console.log("you lost!")
} else {
    console.log("its a draw!")
}
