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
    // convert playerSelection to lower case
    playerSelection = playerSelection.toLowerCase();

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

function game() {
    const MAX_ROUNDS = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < MAX_ROUNDS; ++i) {

        // player has won majority of games
        if (playerScore >= 3 && computerScore < 3) {
            console.log("You win!");
            return;
        }

        // computer has won majority of games
        else if (computerScore >= 3 && playerScore < 3) {
            console.log("You lose!");
            return;
        }

        let playerSelection = prompt("Rock, paper or scissors?");
        let result = playRound(playerSelection, computerPlay());
        console.log(result);

        // tie
        if (result.charAt(4) === "t") {
            --i;
        }

        // player win
        else if (result.charAt(4) == "w") {
            ++playerScore;
        }

        // player loses
        else {
            ++computerScore;
        }

        // print current score
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    }

    if (playerScore > computerScore) console.log("You win!");
    else if (playerScore < computerScore) console.log("You lose!");
    else console.log("You tie!");
}

// returns a string with first letter capitalised
function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
