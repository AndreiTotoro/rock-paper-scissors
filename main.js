
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
    let pscore = 0;
    let cscore = 0;
    for(let i = 1; i <= 5; i++){
        const result = playRound(playerSelection(), computerSelection())
        if (result == 0){
            cscore++;
        }
        if(result == 1){
            pscore++;
        } else{
            cscore++;
            pscore++;
        }
    }
    if(pscore > cscore){
        alert(`The score is ${pscore} to ${cscore}! ${name} has won!`)
    }
    if(cscore > pscore){
        alert(`The score is ${cscore} to ${pscore}! ${name} has lost!`)
    }
    if(cscore == pscore)
    {
        alert(`The score is ${cscore} to ${pscore}! It's a tie!`)
    }
}

game()