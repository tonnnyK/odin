let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click",
        () => game(buttons[i].id));
}

let playerScore = 0;
let computerScore = 0;
const MAX_WIN = 5;

function printResults(playerScore, computerScore, result) {
    const resultDiv = document.querySelector("#results");
    const paraResult = document.createElement("p");
    paraResult.textContent = result;
    resultDiv.appendChild(paraResult);

    const score = document.createElement("p");
    score.textContent = `You: ${playerScore} Computer: ${computerScore}`;
    resultDiv.appendChild(score);

    if (playerScore == MAX_WIN) {
        const win = document.createElement("h1");
        win.textContent = "You win!";
        resultDiv.appendChild(win);
        resetGame();
    }

    else if (computerScore == MAX_WIN) {
        const lose = document.createElement('h1');
        lose.textContent = "You lose!";
        resultDiv.appendChild(lose);
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

// return computer's choice
function computerPlay() {
    let rand = Math.floor( (Math.random() * 3) + 1)

    switch (rand) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function playRound (playerSelection, computerSelection) {
    // tie
    if (playerSelection === computerSelection) {
        return `You tie! ${capitalise(playerSelection)}`;
    }

    // rock
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You win! Rock beats Scissors.';
        }

        else return 'You lose! Paper beats Rock.';
    }

    // paper
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper beats Rock.';
        }

        else return 'You lose! Scissors beats Paper.';
    }

    // scissors
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You win! Scissors beats Paper.';
        }

        else return 'You lose! Rock beats Scissors.';
    }
}

function game(playerSelection) {

    let result = playRound(playerSelection, computerPlay());

    // player win
    if (result.charAt(4) == "w") {
        ++playerScore;
    }

    // player loses
    else if (result.charAt(4) == "l") {
        ++computerScore;
    }

    printResults(playerScore, computerScore, result);
}
