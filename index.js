// code your solution here
function superbowlWin(array){
    const results = array.find(findWin);
    if (!!results === true) {
        return array.find(findWin).year
    } else {
        return undefined
    }
}
function findWin(game) {
    return game.result === 'W'
}