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
