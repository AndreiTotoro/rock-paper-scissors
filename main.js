const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
const result = document.querySelector('#result');
const points = document.querySelector('#points');

let pscore = 0;
let cscore = 0;

const computerSelection = () => {
	const choice = Math.floor(Math.random() * 3);

	if (choice == 0) {
		return 'rock';
	}
	if (choice == 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
};

const scoreChecker = () => {
	points.innerHTML = `Player: ${pscore} Computer: ${cscore}`;
	if (pscore == 5) {
		result.innerHTML = 'Player has 5 points. Player won!';
		points.innerHTML = 'Player: 0 Computer: 0';
		pscore = 0;
		cscore = 0;
	}
	if (cscore == 5) {
		result.innerHTML = 'Computer has 5 points. Computer won!';
		points.innerHTML = 'Player: 0 Computer: 0';
		pscore = 0;
		cscore = 0;
	}
};

const playerSelection = () => {
	let choice = prompt('Rock, Paper, Scissors?').toLowerCase();
	while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
		choice = prompt(
			`Invalid Option! Please choose between: Rock, Paper and Scissors.`
		);
	}
	return choice;
};

const playRound = (computerSelection, playerSelection) => {
	if (playerSelection == 'rock' && computerSelection == 'rock') {
		result.innerHTML = "Computer played rock. It's a tie!";
		scoreChecker();
	}
	if (playerSelection == 'rock' && computerSelection == 'paper') {
		result.innerHTML = 'Computer played paper. You lost!';
		cscore++;
		scoreChecker();
	}
	if (playerSelection == 'rock' && computerSelection == 'scissors') {
		result.innerHTML = 'Computer played scissors. You won!';
		pscore++;
		scoreChecker();
	}

	if (playerSelection == 'paper' && computerSelection == 'rock') {
		result.innerHTML = 'Computer played rock. You won!';
		pscore++;
		scoreChecker();
	}
	if (playerSelection == 'paper' && computerSelection == 'paper') {
		result.innerHTML = "Computer played paper. It's a tie!";
		scoreChecker();
	}
	if (playerSelection == 'paper' && computerSelection == 'scissors') {
		result.innerHTML = 'Computer played scissors. You lost!';
		cscore++;
		scoreChecker();
	}

	if (playerSelection == 'scissors' && computerSelection == 'rock') {
		result.innerHTML = 'Computer played rock. You lost!';
		cscore++;
		scoreChecker();
	}
	if (playerSelection == 'scissors' && computerSelection == 'paper') {
		result.innerHTML = 'Computer played paper. You won!';
		pscore++;
		scoreChecker();
	}
	if (playerSelection == 'scissors' && computerSelection == 'scissors') {
		result.innerHTML = "Computer played scissors. It's a tie!";
		scoreChecker();
	}
};

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		playRound(computerSelection(), button.innerHTML);
	});
});

/*const game = () =>{
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
        result.innerHTML = `The score is ${playerScore} to ${computerScore}! ${name} has won!`)
    }
    if(computerScore > playerScore){
        result.innerHTML = `The score is ${computerScore} to ${playerScore}! ${name} has lost!`)
    }
    if(computerScore == playerScore)
    {
        result.innerHTML = `The score is ${computerScore} to ${playerScore}! It's a tie!`)
    }
}

game()
*/
