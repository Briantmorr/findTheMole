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
        this.moleTimer = null;
    }
    moveMoles() {
            this.moleTimer = setInterval(function () {
            var randomMole = whackMole.getRandomMole();
            var randomTime = whackMole.randomTimes[Math.floor(Math.random() * 3)];
            moveMole(moles[randomMole], randomTime);
        }, 900);
    }
    getRandomMole() {
        var results = Math.floor(Math.random() * 7);
        var totalNum = results;
        return totalNum;
    }
    stopMoles(){
    clearInterval(whackMole.moleTimer);
    }
}
function applyClickHandlers(){
    $('.mole').click(moleWasWhacked);
    $('.moleMover').click(whackMole.moveMoles);
}

function createMoles(){
    for(var i = 1; i <= 9; i++){
        var mole = $('.mole' + i)
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

function winScreen(){
    $('#id01').css({
        display:'block'
    })
}
