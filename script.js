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

let computerScore = 0
let playerScore = 0

// human choice buttons
const rock = document.querySelector("#rock")
rock.addEventListener("click", function() {
    playRound("rock")
})

const paper = document.querySelector("#paper")
paper.addEventListener("click", function() {
    playRound("paper")
})

const scissors = document.querySelector("#scissors")
scissors.addEventListener("click", function() {
    playRound("scissors")
})

function playRound (playerChoice) {
    let computerChoice = getComputerChoice()

    const result = document.querySelector("#result")
    const pscore = document.querySelector("#playerScore")
    const cscore = document.querySelector("#computerScore")

    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            ++computerScore
            result.textContent = "Round lost! Paper beats Rock"
            cscore.textContent = computerScore
        } else if (computerChoice === "scissor") {
            ++playerScore
            result.textContent = "Round won! Rock beats Scissors"
            pscore.textContent = playerScore
        } else {
            result.textContent = "Tie! Rock vs Rock"
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            ++playerScore
            result.textContent = "Round won! Paper beats Rock"
            pscore.textContent = playerScore
        } else if (computerChoice === "scissors") {
            ++computerScore
            result.textContent = "Round lost! Scissors beats Paper"
            cscore.textContent = computerScore
        } else {
            result.textContent = "Tie! Paper vs Paper"
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            ++computerScore
            result.textContent = "Round lost! Rock beats Scissors"
            cscore.textContent = computerScore
        } else if (computerChoice === "paper") {
            ++playerScore
            result.textContent = "Round won! Scissors beats Paper"
            pscore.textContent = playerScore
        } else {
            result.textContent = "Tie! Scissors vs Scissors"
        }
    }
    if(playerScore >= 5) {
        alert("You win!")
    }
    if(computerScore >= 5) {
        alert("You lose!")
    }
}