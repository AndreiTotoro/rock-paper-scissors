
const computerSelection = () =>{
    const choice = Math.floor(Math.random() * 3)
    
    if(choice == 0){
        return "rock"
    }
    if(choice == 1){
        return "paper"
    }
    else{
        return "scissors"
    }
}

const playerSelection = () =>{
    let choice = prompt("Rock, Paper, Scissors?").toLowerCase()
    while(choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("Invalid Option! Please choose between: Rock, Paper and Scissors.")
    } 
    return choice
}

const playRound = (computerSelection, playerSelection) => {
    if(playerSelection == "rock" && computerSelection == "rock"){
        alert("Computer played rock. It's a tie!")
        return 2
    }
    if(playerSelection == "rock" && computerSelection == "paper"){
        alert("Computer played paper. You lost!")
        return 0
    }
    if(playerSelection == "rock" && computerSelection == "scissors"){
        alert("Computer played scissors. You won!")
        return 1
    }

    if(playerSelection == "paper" && computerSelection == "rock"){
        alert("Computer played rock. You won!")
        return 1
    }
    if(playerSelection == "paper" && computerSelection == "paper"){
        alert("Computer played paper. It's a tie!")
        return 2
    }
    if(playerSelection == "paper" && computerSelection == "scissors"){
        alert("Computer played scissors. You lost!")
        return 0
    }

    if(playerSelection == "scissors" && computerSelection == "rock"){
        alert("Computer played rock. You lost!")
        return 0
    }
    if(playerSelection == "scissors" && computerSelection == "paper"){
        alert("Computer played paper. You won!")
        return 1
    }
    if(playerSelection == "scissors" && computerSelection == "scissors"){
        alert("Computer played scissors. It's a tie!")
        return 2
    }
}

const game = () =>{
    const name = prompt("What's your name?")
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 1; i <= 5; i++){
        const result = playRound(playerSelection(), computerSelection())
        if (result == 0){
            computerScore++;
        }
        if(result == 1){
            playerScore++;
        } else{
            computerScore++;
            playerScore++;
        }
    }
    if(playerScore > computerScore){
        alert(`The score is ${playerScore} to ${computerScore}! ${name} has won!`)
    }
    if(computerScore > playerScore){
        alert(`The score is ${computerScore} to ${playerScore}! ${name} has lost!`)
    }
    if(computerScore == playerScore)
    {
        alert(`The score is ${computerScore} to ${playerScore}! It's a tie!`)
    }
}

game()