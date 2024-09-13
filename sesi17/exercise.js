function compareNumber(firstNumber, secondNumber) {
  if (firstNumber === secondNumber) return -1; // edge case
  return secondNumber > firstNumber;
  //   ? 'lebih besar secondNumber'
  //   : 'lebih besar firstNumber';
  //   if (secondNumber > firstNumber) {
  //     return 'lebih besar secondNumber';
  //   } else if (firstNumber > secondNumber) {
  //     return false;
  //   } else if (firstNumber === secondNumber) {
  //     return -1;
  //   }
}

// console.log(compareNumber(1, 2)); // true
// console.log(compareNumber(2, 1)); // false
// console.log(compareNumber(1, 1)); // -1
// console.log(compareNumber(2, 2)); // -1
// console.log(compareNumber(0, 0)); // -1

function reverseString(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr = str[i] + newStr;
  }

  return newStr;
}

// console.log(reverseString('hello')); // olleh
// console.log(reverseString('world')); // dlrow
// console.log(reverseString('')); // ''
// console.log(reverseString('a')); // a
// console.log(reverseString('ab')); // ba

function sortCharacter(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  let newString = '';

  for (let i = 0; i < arr.length; i++) {
    newString += arr[i];
  }

  return newString;
}

// console.log(sortCharacter('hello')); // ehllo
// console.log(sortCharacter('world')); // dlorw
// console.log(sortCharacter('')); // ''
// console.log(sortCharacter('a')); // a
// console.log(sortCharacter('ab')); // ab

function isArithmeticSequence(numbers) {
  let diff = numbers[1] - numbers[0];

  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] !== diff) {
      return false;
    }
  }

  return true;
}

// console.log(isArithmeticSequence([1, 2, 3, 4, 5])); // true
// console.log(isArithmeticSequence([1, 2, 3, 4, 6])); // false
// console.log(isArithmeticSequence([1, 2, 3, 4, 7])); // false
// console.log(isArithmeticSequence([1, 2, 3, 4, 8])); // false

function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(4)); // false
// console.log(isPrime(2)); // true
// console.log(isPrime(31)); // true
// console.log(isPrime(27)); // false

function primeSequence(array) {
  const [num1, num2] = array;
  let primes = [];

  for (let i = num1; i <= num2; i++) {
    // if (i < 2) continue;
    // let isPrime = true;
    // for (let j = 2; j < i; j++) {
    if (isPrimeFn(i)) primes.push(i);
    //   if (i % j === 0) {
    //     isPrime = false;
    //     break;
    //   }
    // }
    // if (isPrime) {
    //   primes.push(i);
    // }
  }

  return primes;
}

// console.log(primeSequence([1, 5])); // [2, 3, 5]
// console.log(primeSequence([1, 10])); // [2, 3, 5, 7]
// console.log(primeSequence([1, 20])); // [2, 3, 5, 7, 11, 13, 17, 19]
// console.log(primeSequence([1, 30])); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
module.exports = {
  primeSequence,
  isPrime,
  isArithmeticSequence,
  sortCharacter,
  reverseString,
  compareNumber,
};
