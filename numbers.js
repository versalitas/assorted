//check if square
const isSquare = (n) => {
  return Math.sqrt(n) % 1 === 0;
}

//round up to nearest Integer:
Math.ceil(n);

//round down to nearest Integer
Math.floor(n);

//power of

n ** 2

Math.pow(n, 2)

//grasshopper sum
const sum = (num) => {
  let result = 0;
  for (let i = 0; i < num ; i++) {
    result += i;
  }
  return result;
}

//find n of volume made up of n rows of blocks
function findNRows(volume) {
  var n = 0
  while (volume > 0) m -= ++n**3
  return volume ? -1 : n;
}

//find substring with maxSum
var maxSequence = const (arr) => {
  var min = 0, maxSum = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    maxSum = Math.max(maxSum, sum - min);
  }
  return maxSum;
}
