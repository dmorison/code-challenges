/* Given an array of arrays, if the arrays are sorted by their length you will see they are 
consecutive except there is one missing. Return the length of the missing array */

function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays == "" || arrayOfArrays == null) {
		return 0;
	} else {
		var lengthArr = [];

		for (var i = 0; i < arrayOfArrays.length; i++) {
			if (arrayOfArrays[i].length === 0) {
				return 0;
			} else {
				lengthArr.push(arrayOfArrays[i].length);
			}
		}

		var newArray = lengthArr.sort((a, b) => a - b);

		for (var j = 1; j < newArray.length; j++) {
			if (newArray[j] !== (newArray[j - 1] + 1)) {
				var result = newArray[j - 1] + 1;
				break;
			}
		}

		return result;
	}
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
