let ballCount = 20
var sec = 0

function createBalls(number){
    for(let i = 0; i < number;i++){
        const ball = document.createElement('div')
        ball.classList.add('ball')
        ball.style.left = Math.floor(Math.random() * (window.innerWidth - 150)) + 'px'
        ball.style.top = Math.floor(Math.random() * (window.innerHeight - 150)) + 'px'
        document.body.appendChild(ball)
        ball.addEventListener('click', onBallClicked)
    }
}

let start = false
function startTimer(){
    start = true
    if (start == true){
    createBalls(20)
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);
}
}

function reStart(){
    document. location. reload()
}


function onBallClicked(e){
    
    document.body.removeChild(e.target)
    ballCount = ballCount - 1
    document.getElementById("ballCount").innerText = ballCount
    
    if (ballCount == 0){
        (alert("you won in " +  sec  + " seconds"))
        reStart()
    }
}