function GetRandom(minNum, maxNum) {
	return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
}
module.exports = GetRandom;