const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const yourPoints = document.getElementById("your-points");
const computerPoints = document.getElementById("computer-points");
const draws = document.getElementById("draws");

let yourChoice;

possibleChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener("click", (event) => {
        yourChoice = event.target.id;
        yourChoiceDisplay.innerHTML = yourChoice;
        generateComputerChoice();
        clash();
        clsResult();
    })
);

let computerChoice;

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);

    if (randomNumber === 1) {
        computerChoice = "rock";
        computerChoiceDisplay.innerHTML = computerChoice;
    } else if (randomNumber === 2) {
        computerChoice = "paper";
        computerChoiceDisplay.innerHTML = computerChoice;
    } else {
        computerChoice = "scisors";
        computerChoiceDisplay.innerHTML = computerChoice;
    }
}

let computerPointsCounter = 0;
let yourPointsCounter = 0;
let drawsCounter = 0;

function clash() {
    if (
        (yourChoice === "rock" && computerChoice === "rock") ||
        (yourChoice === "paper" && computerChoice === "paper") ||
        (yourChoice === "scisors" && computerChoice === "scisors")
    ) {
        drawsCounter += 1;
        draws.innerHTML = String(drawsCounter);
        game();
    } else if (
        (yourChoice === "rock" && computerChoice === "paper") ||
        (yourChoice === "paper" && computerChoice === "scisors") ||
        (yourChoice === "scisors" && computerChoice === "rock")
    ) {
        computerPointsCounter += 1;
        computerPoints.innerHTML = String(computerPointsCounter);
        game();
    } else if (
        (yourChoice === "rock" && computerChoice === "scisors") ||
        (yourChoice === "paper" && computerChoice === "rock") ||
        (yourChoice === "scisors" && computerChoice === "paper")
    ) {
        yourPointsCounter += 1;
        yourPoints.innerHTML = String(yourPointsCounter);
        game();
    }
}

function clear() {
    yourPointsCounter = 0;
    computerPointsCounter = 0;
    drawsCounter = 0;
    draws.innerHTML = String(drawsCounter);
    computerPoints.innerHTML = String(computerPointsCounter);
    yourPoints.innerHTML = String(yourPointsCounter);
}

function clsResult() {
    if (
        yourPointsCounter > 0 ||
        computerPointsCounter > 0 ||
        drawsCounter > 0
    ) {
        resultDisplay.innerHTML = "";
    }
}

let yourWins = 0;
let computerWins = 0;
function game() {
    if (yourPointsCounter == 10) {
        resultDisplay.innerHTML = "You win !";
        clear();
    } else if (computerPointsCounter == 10) {
        resultDisplay.innerHTML = "You loose..";
        clear();
    }
}
