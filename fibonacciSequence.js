// Fibonacci sequence: Xn = Xn-1 + Xn-2
// Write code to produce the fibonacci sequence from 0

var itterations = 14;
var result = [];

function fibonacci(itterations) {

	for (var i = 0; i <= itterations; i++) {
		var next;

		switch (i) {
			case 0:
				result.push(0);
				break;
			case 1:
				result.push(1);
				break;
			default:
				next = result[i - 1] + result[i - 2];
				result.push(next); 
				break;
		}
	}

	return result;

}

console.log(fibonacci(itterations));
