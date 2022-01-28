function findOutlier(integers){
  
  function testEven(num) {
    if (num === 0 || num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  var countTrue = [];
  var countFalse = [];
  
  for (var i = 0; i <= integers.length; i++) {
    if (testEven(integers[i])) {
      countTrue.push(integers[i]);
    } else {
      countFalse.push(integers[i]);
    }
  }
  
  if (countTrue.length === 1) {
    return countTrue[0];
  } else {
    return countFalse[0];
  }
  
}

console.log(findOutlier([3, 5, 9, 7, 13, 10]));