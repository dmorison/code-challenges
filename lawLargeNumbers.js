function loln(n, r) {

	var range = r;
	var numArray = [];

	// var count = 0;
	for (var i = 0; i < n; i++) {
		var num = Math.random() * (range - (-range)) + (-range);
		num = Math.floor(num);
		numArray.push(num);

		// if (num >= -0.682 && num <= 0.682) {
		// 	count++;
		// }
	}
	// console.log(count);
	// var result = (count / n) * 100;
	// console.log('result = ' + result);

	console.log(numArray);
	// calculate the mean of the array
	var arrayMean = (numArray.reduce((a, b) => a + b)) / n;
	console.log(arrayMean);
	// calculate the difference each value is from the mean
	var diffArray = numArray.map((a) => a - arrayMean);
	console.log(diffArray);
	// calculate the square of each difference from the mean
	var sqrDiffArray = diffArray.map((a) => a * a);
	console.log(sqrDiffArray);
	// calculate the mean of the squared differences
	var sqrDiffMean = (sqrDiffArray.reduce((a, b) => a + b)) / n;
	console.log(sqrDiffMean);
	// calculate the square root of the squared differences mean
	var std = Math.sqrt(sqrDiffMean);
	console.log(std);

	var std_range = [arrayMean - std, arrayMean + std];
	console.log(std_range);

	var count = 0;
	for (var j = 0; j < n; j++) {
		if (numArray[j] >= std_range[0] && numArray[j] <= std_range[1]) {
			count++;
		}
	}
	console.log(count);
	var loln = (count / n) * 100;
	loln = Number(loln.toFixed(2));
	console.log(loln);

}

loln(14, 100);