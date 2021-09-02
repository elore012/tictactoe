let firstDiv = document.querySelector('#box1');
let secondDiv = document.querySelector('#box2');
let thirdDiv = document.querySelector('#box3');
let fourthDiv = document.querySelector('#box4');
let fifthDiv = document.querySelector('#box5');
let sixthtDiv = document.querySelector('#box6');
let seventhDiv = document.querySelector('#box7');
let eightDiv = document.querySelector('#box8');
let ninethDiv = document.querySelector('#box9');
let displayWinner = document.querySelector('#test')
let reset = document.querySelector('#reset');
let boxes = document.querySelectorAll('.boxes');
let clickTimes = 9;
let startClick = 0;
const divArrays = [firstDiv, secondDiv, thirdDiv, fourthDiv, fifthDiv, sixthtDiv, seventhDiv, eightDiv, ninethDiv]
const win1 = [firstDiv, secondDiv, thirdDiv]
const win2 = [firstDiv, fourthDiv, seventhDiv]
const win3 = [seventhDiv, eightDiv, ninethDiv]
const win4 = [thirdDiv, sixthtDiv, ninethDiv]
const win5 = [firstDiv, fifthDiv, ninethDiv]
const win6 = [thirdDiv, fifthDiv, seventhDiv]
const win7 = [secondDiv, fifthDiv, eightDiv]
const win8 = [fourthDiv, fifthDiv, sixthtDiv]



let gameBoard = [
[firstDiv, secondDiv, thirdDiv],
[fourthDiv, fifthDiv, sixthtDiv],
[seventhDiv, eightDiv, ninethDiv]
]
let player1 = "X";
let player2 = "O";
let firstTurn = player1;


let ifClick = function () {
divArrays.forEach(x => {
x.addEventListener('click', click,{once:true})
})
}

ifClick();

function click(e) {
let clicked = e.target;
if (!!clicked) {
clicked = firstTurn;
e.target.innerText = firstTurn;

startClick++;
if (startClick === clickTimes) {
displayWinner.innerText = "DRAW";
}
win();
}
firstTurn = firstTurn === player1 ? player2 : player1;

}

function win() {

if (gameBoard[0][0].innerText === firstTurn && firstTurn && gameBoard[0][1].innerText ===
firstTurn && gameBoard[0][2].innerText === firstTurn) {
displayWinner.innerText = `${ firstTurn } win`
for (let i = 0; i <= 2; i++) {
win1[i].style.color = "red"
win1[i].style.backgroundColor = "gray";

}

} else if (gameBoard[0][0].innerText === firstTurn && firstTurn && gameBoard[1][0].innerText ===
firstTurn && gameBoard[2][0].innerText === firstTurn) {
displayWinner.innerText = `${ firstTurn } win`
for (let i = 0; i <= 2; i++) {
win2[i].style.color = "red"
win2[i].style.backgroundColor = "gray";
}
} else if (gameBoard[0][2].innerText === firstTurn && firstTurn && gameBoard[1][2].innerText ===
firstTurn && gameBoard[2][2].innerText === firstTurn) {
displayWinner.innerText = `${ firstTurn } win`
for (let i = 0; i <= 2; i++) {
win4[i].style.color = "red"
win4[i].style.backgroundColor = "gray";
}

} else if (gameBoard[2][0].innerText === firstTurn && firstTurn && gameBoard[2][1].innerText ===
firstTurn && gameBoard[2][2].innerText === firstTurn) {
displayWinner.innerText = `${ firstTurn } win`
for (let i = 0; i <= 2; i++) {
win3[i].style.color = "red"
win3[i].style.backgroundColor = "gray";
}

} else if (gameBoard[0][0].innerText === firstTurn && firstTurn && gameBoard[1][1].innerText ===
firstTurn && gameBoard[2][2].innerText === firstTurn) {
displayWinner.innerText = `${ firstTurn } win`
for (let i = 0; i <= 2; i++) {
win5[i].style.color = "red"
win5[i].style.backgroundColor = "gray";
}

} else if (gameBoard[0][2].innerText === firstTurn && firstTurn && gameBoard[1][1].innerText ===
firstTurn && gameBoard[2][0].innerText === firstTurn) {
displayWinner.innerText = `${ firstTurn } win`
for (let i = 0; i <= 2; i++) {
win6[i].style.color = "red"
win6[i].style.backgroundColor = "gray";
}
} else if (gameBoard[0][1].innerText === firstTurn && firstTurn && gameBoard[1][1].innerText ===
firstTurn && gameBoard[2][1].innerText === firstTurn) {
displayWinner.innerText = `${ firstTurn } win`
for (let i = 0; i <= 2; i++) {
win7[i].style.color = "red"
win7[i].style.backgroundColor = "gray";
}

} else if (gameBoard[1][0].innerText === firstTurn && firstTurn && gameBoard[1][1].innerText ===
firstTurn && gameBoard[1][2].innerText === firstTurn) {
displayWinner.innerText = `${ firstTurn } win`
for (let i = 0; i <= 2; i++) {
win8[i].style.color = "red"
win8[i].style.backgroundColor = "gray";
}
}
}
let resetGame = function () {

reset.addEventListener('click', function () {
for (let i = 0; i < 9; i++) {
boxes[i].innerText = "";
    displayWinner.innerText = "WHO WILL WIN"
divArrays.forEach(function (z) {
z.removeEventListener('click', click)
ifClick();
})

}
for (let j = 0; j < divArrays.length; j++) {
divArrays[j].style.color = "black";
divArrays[j].style.backgroundColor = "white";
divArrays.forEach(function (z) {
    
})
}

startClick = 0;
firstTurn = player1
})
}
resetGame();





