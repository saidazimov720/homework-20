let isGameActive = false;
let timeoutID;

function startGame() {
    if (isGameActive) return;
    isGameActive = true;

    let timeLeft = 5;
    document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;

    timeoutID = setTimeout(() => {
        isGameActive = false;
        document.getElementById('timer').textContent = 'Time is up!';
    }, timeLeft * 1000);
}

function playGame(userChoice) {
    if (!isGameActive) return;

    clearTimeout(timeoutID);
    isGameActive = false;
    document.getElementById('timer').textContent = '';

    const choices = ['rock', 'scissors', 'paper'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('user-choice').textContent = `Your choice: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer's choice: ${computerChoice}`;

    let userImage, computerImage;

    switch (userChoice) {
        case 'rock':
            userImage = './media/leadership.png';
            break;
        case 'paper':
            userImage = './media/hand.png';
            break;
        case 'scissor':
            userImage = './media/scissors.png';
            break;
    }

    switch (computerChoice) {
        case 'rock':
            computerImage = './media/leadership.png';
            break;
        case 'paper':
            computerImage = './media/hand.png';
            break;
        case 'scissors':
            computerImage = './media/scissors.png';
            break;
    }

    document.querySelector('.you .sym').innerHTML = `<img class="img" src="${userImage}" alt="${userChoice}">`;
    document.querySelector('.comp .sym').innerHTML = `<img class="img" src="${computerImage}" alt="${computerChoice}">`;

    let result;

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    document.getElementById('outcome').textContent = result;
}