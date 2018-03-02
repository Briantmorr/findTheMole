$(document).ready(initializeApp);
var whackMole = null;
var moles = [];
for(var i = 0; i < 9; i++){
    
}
function initializeApp(){
    whackMole = new MoleGame(moles);
    applyClickHandlers();
}

