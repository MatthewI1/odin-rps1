console.log("Hello World!");
document.getElementById("rock").addEventListener("click", playRockGame);
document.getElementById("paper").addEventListener("click", playPaperGame);
document.getElementById("scissors").addEventListener("click", playScissorsGame);

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

function displayResult(string) {
    document.getElementById("result").innerText = string;
}

let wins = 0;
let loses = 0;
function playRockGame() {playGame("rock")};
function playPaperGame() {playGame("paper")};
function playScissorsGame() {playGame("scissors")};
function playGame(user_choice) {
    var pcChoice = getComputerChoice();
    var userChoice = user_choice;
    let result =  getResult(userChoice, pcChoice);
    if (result === 'win') {
        displayResult("you won!" + userChoice.toLowerCase() + " beat " + pcChoice);
        wins++;
    } else if (result === 'lose') {
        displayResult("you lost." + userChoice.toLowerCase() + " loses to " + pcChoice);
        loses++;
    } else {
        displayResult("draw!");
    }
}

// if (wins > loses) {
//     console.log("you won!")
// } else if (loses > wins) {
//     console.log("you lost!")
// } else {
//     console.log("its a draw!")
// }
