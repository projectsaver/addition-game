let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let gameResult = document.getElementById("gameResult");

let generateRandomOne = Math.ceil(Math.random() * 100);
let generateRandomTwo = Math.ceil(Math.random() * 100);
let sumRandomValue = generateRandomOne + generateRandomTwo;
firstNumber.textContent = generateRandomOne;
secondNumber.textContent = generateRandomTwo;

function checkButtonFun() {
    let userInput = document.getElementById("userInput").value;
    let userInputInteger = parseInt(userInput);
    if (userInputInteger === sumRandomValue) {
        gameResult.textContent = "Congratulations! You got it Right.";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please try again!";
        gameResult.style.backgroundColor = "#1e217c";
    }

}

function restartButtonFun() {
    location.reload();
    gameResult.textContent = "";
}
