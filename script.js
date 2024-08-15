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
