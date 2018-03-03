// Iterative Methods in ECMA5
// note that none of these methods affect numbers array

var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult = numbers.every(function (item, index, array) {
	return item > 2;
});

var someResult = numbers.some(function (item, index, array) {
	return item > 2;
});

var filterResult = numbers.filter(function (item, index, array) {
	return item > 2;
});

var mapResult = numbers.map(function(item, index, array) {
	return item * 2;
});

numbers.forEach(function(item, index, array) {
	console.log('inside forEach: '+ item * 2);
});

console.log('result .every(): ' + everyResult);
console.log('result .some(): ' + someResult);
console.log('result .filter(): ' + filterResult);
console.log('result .map(): ' + mapResult);
