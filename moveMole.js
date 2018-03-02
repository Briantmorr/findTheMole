function moveMole (moleToMove, timeUp){
    moleToMove.addClass('moveUp');
    moleToMove.removeClass('noTouch');
    setTimeout(function(){
        moleToMove.removeClass('moveUp');
    }, timeUp);
}