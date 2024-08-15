let countdown;
let isGameActive = false;
function startGame() {
    if (isGameActive) return;
    isGameActive = true;
    let timeLeft = 5;
    document.getElementById('timer').textContent = `Time left ${timeLeft} s`;
    countdown = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time left ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            document.getElementById('timer').textContent = 'Time is up';
            isGameActive = false;
        }
    }, 1000);
}
function playGame(userChoice) {
    if (!isGameActive) return;
    clearInterval(countdown);
    isGameActive = false;
    document.getElementById('timer').textContent = '';
    const choices = ['rock', 'scissors', 'paper'];
    const computerChoice = choices[Math.floor(math.random() * 3)];
    document.getElementById('user-choice').textContent = `Your choice: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer's choice: ${computerChoice}`;
    let userImage, computerImage;
    switch (userImage) {
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
     
    switch (computerImage) {
        case 'rock':
            computerImage = './media/leadership.png';
            break;
        case 'paper':
            computerImage = './media/hand.png';
            break;
        case 'scissor':
            computerImage = './media/scissors.png';    
            break;
    }   

    document.querySelector('.you .sym').innerHTML = `<img class="img" src="${userImage}" alt="${userChoice}">`;
    document.querySelector('.you .sym').innerHTML = `<img class="img" src="${computerImage}" alt="${computerChoice}">`;
    
}