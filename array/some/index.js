// some()
// - Iterates through an array
// - Runs a callback on each value in the array
// - If the callback returns true for at least one single value, return true
// = Otherwise, return false

function hasEvenNumber(arr) {
	return arr.some(val => val % 2 === 0);
};

hasEvenNumber([1, 2, 3, 4]) // true
hasEvenNumber([1, 3, 5, 7]) // false


function hasComma(str) {
	return str.split('').some(val => val === ',');
}

hasComma('This is wonderful'); // false
hasComma('This, is wonderful'); // true