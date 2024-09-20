const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
const grid = document.querySelector("#grid") 
const mole = document.querySelector(".mole")

// square[0].classList.add("mole")
var squares;

let result = 0;
let targatPosition = null;
let currentTime = 60;
let timer;
let countdownTimer;

for (let i=0; i<9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}
square = document.querySelectorAll(".square");

// var squares;
// squares = document.querySelector("squares")



// squares = document.querySelectorAll(".square")

// rendomSquare();

function rendomSquare(){
    squares.forEach(function(square){
        square.classList.remove('mole')
    })
    let randomNumber = Math.floor(Math.random() * 9);
    targatPosition = randomNumber;
    let randomSquare = squares[randomNumber];
    randomSquare.classList.add('mole')
}

function moveInterval(){
    timer = setInterval(randomSquare, 1000)
}
moveInterval()



for(let i=0; i<9; i++){
    squares[i].addEventListener('mousedown', function(){
        if(i === targatPosition){
            result++
            score.textContent = result
            targatPosition = null;
        }
    })
    
}

function countdown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime ==0){
        clearInterval(timer)
        clearInterval(countdownTimer)
        alert("GAME OVER! Score : "+ result)
    }
}

countdownTimer = setInterval(countdown, 1000)