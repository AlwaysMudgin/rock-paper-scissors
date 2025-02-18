function getComputerChoice() {
    let n = Math.random()
    if (n <= 0.33) {
        return "rock";
    } else if (n <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose: Rock, Paper, Scissors")
    return String(choice).toLowerCase();
}


function playGame() {
    let humanScore = 0
    let computerScore = 0
    function playRound() {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                ++computerScore
                console.log("You lose! Paper beats Rock")
            } else if (computerChoice === "scissor") {
                ++humanScore
                console.log("You win! Rock beats Scissors")
            } else {
                console.log("Tie! Rock vs Rock")
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                ++humanScore
                console.log("You win! Paper beats Rock")
            } else if (computerChoice === "scissors") {
                ++computerScore
                console.log("You lose! Scissors beats Paper")
            } else {
                console.log("Tie! Paper vs Paper")
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                ++computerScore
                console.log("You lose! Rock beats Scissors")
            } else if (computerChoice === "paper") {
                ++humanScore
                console.log("You win! Scissors beats Paper")
            } else {
                console.log("Tie! Scissors vs Scissors")
            }
        }
    }
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
}

playGame()