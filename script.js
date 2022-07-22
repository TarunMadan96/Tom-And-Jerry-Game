score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        jerry = document.querySelector('.jerry');
        jerry.classList.add('animatejerry');
        setTimeout(() => {
            jerry.classList.remove('animatejerry')
        }, 700);
    }
    if (e.keyCode == 39) {
        jerry = document.querySelector('.jerry');
        jerryX = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
        jerry.style.left = jerryX + 112 + "px";
    }
    if (e.keyCode == 37) {
        jerry = document.querySelector('.jerry');
        jerryX = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
        jerry.style.left = (jerryX - 112) + "px";
    }
}

setInterval(() => {
    jerry = document.querySelector('.jerry');
    gameOver = document.querySelector('.gameOver');
    tom = document.querySelector('.tom');

    dx = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(tom, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(tom, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload To Play Again"
        tom.classList.remove('obstacletom')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            tomDur = parseFloat(window.getComputedStyle(tom, null).getPropertyValue('animation-duration'));
            newDur = tomDur - 0.1;
            tom.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score

}