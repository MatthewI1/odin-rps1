console.log("Hello World!");

const choice = {
    Rock: 'Rock',
    Paper: 'Paper',
    Scissors: 'Scissors'
}

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    return Object.keys(choice)[num];
}

console.log(getComputerChoice());