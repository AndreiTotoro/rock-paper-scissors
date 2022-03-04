
const computerPlay = () =>{
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

const playRound = (computerPlay, playerSelection) => {
    if(playerSelection == "rock" && computerPlay == "rock"){
        alert("Computer played rock. It's a tie!")
    }
    if(playerSelection == "rock" && computerPlay == "paper"){
        alert("Computer played paper. You lost!")
    }
    if(playerSelection == "rock" && computerPlay == "scissors"){
        alert("Computer played scissors. You won!")
    }

    if(playerSelection == "paper" && computerPlay == "rock"){
        alert("Computer played rock. You won!")
    }
    if(playerSelection == "paper" && computerPlay == "paper"){
        alert("Computer played paper. It's a tie!")
    }
    if(playerSelection == "paper" && computerPlay == "scissors"){
        alert("Computer played scissors. You lost!")
    }

    if(playerSelection == "scissors" && computerPlay == "rock"){
        alert("Computer played rock. You lost!")
    }
    if(playerSelection == "scissors" && computerPlay == "paper"){
        alert("Computer played paper. You won!")
    }
    if(playerSelection == "scissors" && computerPlay == "scissors"){
        alert("Computer played scissors. It's a tie!")
    }
}