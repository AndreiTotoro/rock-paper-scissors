
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
    return prompt("Rock, Paper, Scissors?").toLowerCase()
}

const playRound = (computerPlay, playerSelection) => {
    console.log(playerSelection + " " + computerPlay)
}