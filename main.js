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
    $('.moleMover').click(whackMole.moveMoles);
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
    var whack = new Audio();
    whack.src = 'assets/whack.mp3';
    whack.play();
}


function timerStart(){
    setInterval()

}

function updateTime(){
    var timer = $('.timeLeft');
    var currentTime = parseInt(timer.text());
    currentTime = currentTime - 1;
    timer.text(currentTime);

}

