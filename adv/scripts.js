const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.getElementById("game");
//creates objects into container
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;

const handleClick = (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = "user choice: " + userChoice;
    generateComputerChoice();
    getResult();
};

const generateComputerChoice = () => {
    // assigns choice value to the element of array
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = randomChoice;
    computerChoiceDisplay.innerHTML = "computer choice: " + randomChoice;
};

for (let i = 0; i < choices.length; i++) {
    //creates as many buttons with event listeners, inner_text and id's as items in the array
    const button = document.createElement("button");
    button.id = choices[i];
    button.innerHTML = choices[i];
    button.addEventListener("click", handleClick);
    gameGrid.appendChild(button);
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            resultDisplay.innerHTML = "you win !!";
            break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            resultDisplay.innerHTML = "you loose !";
            break;
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
            resultDisplay.innerHTML = "DRAW !";
            break;
    }
};
