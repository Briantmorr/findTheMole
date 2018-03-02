$(document).ready(initializeApp);
var whackMole = null;
var moles = [];
for(var i = 1; i <= 9; i++){
    var mole = $('.mole' + i);
    moles.push(mole);
}
function initializeApp() {
    whackMole = new MoleGame(moles);
    applyClickHandlers();
}

class MoleGame {
    constructor(moles){
        this.moleArray = [];
        this.moleArray = moles;
    }
    moveMoles(){
        var aRandomMole = this.getRandomMole();
        setInterval(function () {
            moveMole(moles[aRandomMole], 1000)
        }, 2000);
    }
    getRandomMole(){
    return 1;
    }
}
function applyClickHandlers(){

}
