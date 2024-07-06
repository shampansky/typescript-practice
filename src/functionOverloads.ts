//write a function which accepts two numbers (two parameters) of an array of 2 numbers (one parameter)
function getNumbersSum(a: number[]): number;
function getNumbersSum(a: number, b: number): number;
function getNumbersSum(a: number | number[], b?: number) {
  if (typeof a === 'number' && typeof b !== 'undefined') {
    return a + b;
  }
  if (Array.isArray(a)) {
    return a.reduce((acc, cur) => acc + cur, 0);
  }
}

getNumbersSum(3, 5); //?

getNumbersSum([3, 2]); //?

// getNumbersSum([3,3], 3)
