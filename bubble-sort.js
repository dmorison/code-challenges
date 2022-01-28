// bubble sort algorithm in JavaScript
var testArray = [2, 5, 7, 9, 17, 222];
var initArray = [3, 6, 22, 1, 7, 45, 87, 6, 111, 54, 8];
var resultArray = [];
var status = false;
var itterations = 1;

function sort(arr) {

	// console.log(arr);

	var myArray = arr;
	var swaps = 0;

	for (var i = 0; i < myArray.length - 1; i++) {
		console.log(myArray);
		if (myArray[i] > myArray[i + 1]) {

			var store = myArray[i];

			myArray[i] = myArray[i + 1];
			myArray[i + 1] = store;

			swaps++;

		}
		console.log(myArray);
	}

	if (swaps === 0) {
		status = true;
	}

	// console.log(myArray);
	console.log('swaps: ' + swaps);
	console.log(status);

	resultArray = myArray;

}

function init(arr) {

	sort(arr);

	while (!status) {

		sort(resultArray);
		itterations++;

	}

	console.log("Total itterations: " + itterations);

}

console.time('calculate');
init(initArray);
console.timeEnd('calculate');

