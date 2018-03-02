$(document).ready(initializeApp);
var whackMole = null;
var moles = [];
for(var i = 0; i < 9; i++){
    var mole = {
        name: i

    };
    moles.push(mole);
}
function initializeApp(){
    whackMole = new MoleGame(moles);
    applyClickHandlers();
}

class MoleGame{
	constructor( molesarray ) {
		this.moles = [];
		this.molesArray = molesarray; 

	},
	getRandomMoles  () {
		var results = Math.floor(Math.random() * 7);
		var totalNum = results;
		return totalNum;
		}
	}



