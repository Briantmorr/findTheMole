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
    $('.mole').click(molesWacked);
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
