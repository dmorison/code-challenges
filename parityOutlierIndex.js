function iqTest(numbers){
  var nums_2 = numbers.split(' ');
  var nums = [];

  for (var j = 0; j < nums_2.length; j++) {
  	nums.push(parseInt(nums_2[j]));
  }
  
  var evens = [];
  var odds = [];
  for (var i = 0; i < nums.length; i++) {
    var xyz = nums[i];
    (xyz === 0 || xyz % 2 === 0) ? evens.push(xyz) : odds.push(xyz);
  }

  var result = evens.length > 1 ? nums.indexOf(odds[0]) : nums.indexOf(evens[0]);
  
  return result + 1;
  
}

console.log(iqTest("2 4 6 7 8 10"));