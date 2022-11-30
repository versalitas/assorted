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
