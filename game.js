const winMessage = document.querySelector('.win-info');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', playRound);
});

function playRound(e) {
    let playerSelection = getPlayerSelection(e);
    let computerSelection = getComputerSelection();
    let winner = determineWinner(playerSelection, computerSelection);

    updateMessage(winner, playerSelection, computerSelection);
    increaseScore(winner);

    gameOver(); // Only runs if score is 5
}

function getPlayerSelection(e) {
    return e.target.id;
}

function getComputerSelection() {
    let choiceList = ['rock', 'paper', 'scissors'];
    let choiceIndex = Math.floor(Math.random() * 3);
    return choiceList[choiceIndex];
}

function determineWinner(player, comp) {
    if (player === comp) {
            return null;
    } else if (
        player === 'rock' && comp === 'scissors' ||
        player === 'scissors' && comp === 'paper' ||
        player === 'paper' && comp === 'rock') {
            return 'player';
    } else {
            return 'computer';
    }
}

function updateMessage(winner, player, comp) {
    if (winner === 'player') {
        winMessage.textContent = `You win! ${player} beats ${comp}!`;
    } else if (winner === 'computer') {
        winMessage.textContent = `You lose! ${player} loses to ${comp}!`;
    } else {
        winMessage.textContent = `It's a draw!`;
    }
}

function increaseScore(winner) {
    if (winner === 'player') {
        playerScore.innerText = parseInt(playerScore.innerText) + 1;
    } else if (winner === 'computer') {
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
    }
}

function gameOver() {
    if (playerScore.innerText == '5') {
        alert('GAME OVER! You won!');
        location.reload();
    }

    if (computerScore.innerText == '5') {
        alert('GAME OVER! You lost!');
        location.reload();
    }
}