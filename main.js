$(document).ready(initializeApp);
var whackMole = null;
var moles = [];

function initializeApp() {
    whackMole = new MoleGame(moles);
    applyClickHandlers();
    createMoles();
}

class MoleGame {
    constructor(moles) {
        this.moleArray = [];
        this.moleArray = moles;
        this.randomTimes = [1000, 2000, 3000];
    }
    moveMoles() {
        setInterval(function () {
            var randomMole = whackMole.getRandomMole();
            var randomTime = whackMole.randomTimes[Math.floor(Math.random() * 3)];
            console.log(randomTime);
            moveMole(moles[randomMole], 1000);
        }, 2000);
    }
    getRandomMole() {
        var results = Math.floor(Math.random() * 7);
        var totalNum = results;
        return totalNum;
    }
}
function applyClickHandlers(){
    $('.mole').click(moleWasWhacked);
    $('.moleMover').click(startGame);
}

function createMoles(){
    for(var i = 1; i <= 9; i++){
        var mole = $('.mole' + i);
        moles.push(mole);
    }
}

function moleWasWhacked(){
    $(this).addClass('noTouch');
    $('.statsNumber').text(parseInt($('.statsNumber').text())+1);
    var squeak = new Audio();
    squeak.src = 'assets/squeak.mp3';
    squeak.play();
}


function timerStart(){
    var timerStartStop = setInterval(updateTime,1000);
    setTimeout(clearInterval.bind(null, timerStartStop),20000);
}

function updateTime(){
    console.log("We are running our set interval");
    var timer = $('.timeLeft');
    var currentTime = parseInt(timer.text());
    currentTime = currentTime - 1;
    timer.text(currentTime);

}

function startGame(){
    timerStart();
    whackMole.moveMoles();
}

