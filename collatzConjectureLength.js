/* The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. 
If n is odd, multiply it by 3 and add 1. If you repeat the process continously for n, n will eventually reach 1.
Write a program that will output the length of the Collatz Conjecture for any given n. And log the conjecture.
*/

function collatz(n){
  var num = n;
  var con = [n];
  var count = 1;

  while (num !== 1) {
    num = num % 2 === 0 ? (num / 2) : ((num * 3) + 1);
    con.push(num);
    count++;
  }

  console.log(con);
  console.log('initial number: ' + n);
  console.log('length: ' + count);
  console.log('max reach: ' + Math.max.apply(null, con));
  // return count;
}

collatz(7);