function getRectangleArea(width, height) {
  return width * height;
}
function getCircleCircumference(radius) {
  return Math.PI * radius * 2;
}
function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** (1 / 2);
}
function getLinearEquationRoot(a, b) {
  return -b / a;
}
function getAngleBetweenVectors(x1, y1, x2, y2) {
  return Math.acos(
    (x1 * x2 + y1 * y2) /
      ((x1 ** 2 + y1 ** 2) ** (1 / 2) * (x2 ** 2 + y2 ** 2) ** (1 / 2))
  );
}
function getLastDigit(value) {
  return value % 10;
}
function parseNumberFromString(value) {
  return +value;
}
function getParallelepipedDiagonal(a, b, c) {
  return (a ** 2 + b ** 2 + c ** 2) ** (1 / 2);
}
function roundToPowerOfTen(num, pow) {
  const float = num * 10 ** -pow;
  return Math.round(float) * 10 ** pow;
}
function isPrime(n) {
  let isPr = null;
  for (let i = 2; i <= n; i += 1) {
    if (i === 2) isPr = true;
    if (n % i === 0 && n !== i) isPr = false;
  }
  return isPr;
}
function toNumber(value, def) {
  const num = +value;
  let result = null;
  if (typeof num === 'number' && !Number.isNaN(num)) {
    result = num;
  } else {
    result = def;
  }
  return result;
}
function getCube(num) {
  return num ** 3;
}
function getFibonacciNumber(index) {
  return index <= 1
    ? index
    : getFibonacciNumber(index - 1) + getFibonacciNumber(index - 2);
}
function getSumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; ) {
    sum += i;
    i += 1;
  }
  return sum;
}
function getSumOfDigits(num) {
  const string = num.toString();
  const arr = string.split('');
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; ) {
    sum += Number(arr[i]);
    i += 1;
  }
  return sum;
}
function isPowerOfTwo(num) {
  let result = false;
  for (let i = 1; i <= num; ) {
    if (2 ** i === num) result = true;
    i += 1;
  }
  return result;
}
function getSine(num) {
  return Math.sin(num);
}

/**
 * Returns a string representation of a number in a specified base (radix).
 *
 * @param {number} number
 * @param {number} base
 * @return {string}
 *
 * @example:
 * 255, 16 => 'ff'
 * 2, 2    => '10'
 */
function numberToStringInBase(/* number, base */) {
  throw new Error('Not implemented');
}
function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}
function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits).toString();
}
function toPrecision(number, precision) {
  return number.toPrecision(precision);
}
function getNumberValue(number) {
  return number.valueOf();
}
function isNumber(number) {
  let indicator = null;
  if (
    typeof number === 'number' &&
    !Number.isNaN(number) &&
    Number.isFinite(number)
  ) {
    indicator = true;
  } else {
    indicator = false;
  }
  return indicator;
}
function isInteger(number) {
  return Number.isInteger(number);
}
function getFloatOnString(str) {
  return Number.parseFloat(str);
}
function getIntegerOnString(str, base) {
  return Number.parseInt(str, base);
}
function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}
function roundToSmallestInteger(number) {
  return Math.floor(number);
}
function roundToLargestInteger(number) {
  return Math.ceil(number);
}
function roundToNearestInteger(number) {
  return Math.round(number);
}
function getIntegerPartNumber(number) {
  return Math.trunc(number);
}
function getSumOfNumbers(x1, x2, x3) {
  const sum = x1 + x2 + x3;
  return +sum.toFixed(2);
}
function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}
function getCountOfOddNumbers(number) {
  let oddCount = 0;
  let i = 1;
  if (number > 0) {
    for (i; i <= number; ) {
      if (i % 2 !== 0) {
        oddCount += 1;
      }
      i += 1;
    }
  } else if (number < 0) {
    for (let b = number; b <= 0; ) {
      if (b % 2 !== 0) {
        oddCount += 1;
      }
      b += 1;
    }
  }
  return oddCount;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
