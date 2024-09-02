// 1. Even or Odd
function isEven(num) {
  //   if (num % 2 === 0) {
  //     return 'Even';
  //   }
  //   return 'Odd';
  return num % 2 === 0 ? 'Even' : 'Odd';
}

// console.log(isEven(4)); // "Even"
// console.log(isEven(7)); // "Odd"

// 2. Find the Largest Number
function findLargest(a, b, c) {
  //   if (a >= b && a >= c) {
  //     return a;
  //   } else if (b >= a && b >= c) {
  //     return b;
  //   } else {
  //     return c;
  //   }
  return Math.max(a, b, c);
}

// console.log(findLargest(10, 10, 3)); // 10
// console.log(findLargest(8, 2, 14)); // 14

// 3. FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(15);
// 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"

// 4. Sum of Numbers
function sumOfNumbers(n) {
  //   let i = 0;
  //   let sum = 0;
  //   while (i < n) {
  //     i++;
  //     sum += i;
  //   }
  //   return sum;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sumOfNumbers(10)); // 55
// console.log(sumOfNumbers(5)); // 15

// 5. Count Vowels
function countVowels(str) {
  let result = 0;

  const vowels = 'aiueo';
  //   const vowels = {
  //     a: true,
  //     i: true,
  //     u: true,
  //     e: true,
  //     o: true,
  //   };

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    for (let j = 0; j < vowels.length; j++) {
      if (char === vowels[j]) {
        result++;
        break;
      }
    }
  }

  return result;
}

// console.log(countVowels('Hello World')); // 3
// console.log(countVowels('Javascript')); // 3

// 6. Factorial
function factorial(n) {
  // if (n === 0) {
  //   return 1;
  // }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// console.log(factorial(5)); // 120
// console.log(factorial(7)); // 5040

// 7. Prime Number Check
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(11)); // true
// console.log(isPrime(15)); // false

// 8. Reverse a String
function reverseString(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str[str.length - i - 1];
    // result = str[i] + result;
  }

  return result;
}

// console.log(reverseString('Hello')); // "olleH"
// console.log(reverseString('Javascript')); // "tpircsavaJ"

// 9. Find the Second Largest Number in an Array
function secondLargest(arr) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  let i = 0;
  while (i < arr.length) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== firstMax) {
      secondMax = arr[i];
    }
    i++;
  }
  return secondMax;
}

console.log(secondLargest([10, 5, 8, 12, 3])); // 10
console.log(secondLargest([4, 7, 7, 8, 8])); // 7

// 10. Find the Sum of Digits in a Number
function sumOfDigits(num) {}

// console.log(sumOfDigits(1234)); // 10
// console.log(sumOfDigits(567)); // 18

// 11. asterisk
function asterisk(n) {}

asterisk(5);
/*
 *
 **
 ***
 ****
 *****
 */

// 12. reverseASterisk
function reverseAsterisk(n) {}

reverseAsterisk(5);
/*
 *****
 ****
 ***
 **
 *
 */

// 13. returningAsterisk
function returningAsterisk(n) {}

returningAsterisk(5);
/*
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
 */

// 13. grouper
function grouper(arr) {
  const output = {
    food: [],
    drink: [],
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === 'food') {
      output.food.push(arr[i].name);
    } else if (arr[i].type === 'drink') {
      output.drink.push(arr[i].name);
    }
  }
  return output;
}

const items = [
  {
    name: 'Coca Cola',
    type: 'drink',
  },
  {
    name: 'Pepsi',
    type: 'drink',
  },
  {
    name: 'Big Mac',
    type: 'food',
  },
  {
    name: 'McChicken',
    type: 'food',
  },
  {
    name: 'Fanta',
    type: 'drink',
  },
  {
    name: 'Sprite',
    type: 'drink',
  },
  {
    name: 'French Fries',
    type: 'food',
  },
  {
    name: 'Cheeseburger',
    type: 'food',
  },
  {
    name: 'Mountain Dew',
    type: 'drink',
  },
  {
    name: 'Nuggets',
    type: 'food',
  },
  {
    name: 'Dr. Pepper',
    type: 'drink',
  },
  {
    name: 'Ice Cream',
    type: 'food',
  },
  {
    name: 'Root Beer',
    type: 'drink',
  },
  {
    name: 'Onion Rings',
    type: 'food',
  },
  {
    name: 'Milkshake',
    type: 'drink',
  },
  {
    name: 'Chicken Sandwich',
    type: 'food',
  },
];

// console.log(grouper(items));

// 14. seatingArrangement
// function seatingArrangement(students) {
//   const output = [];
//   let male = [];
//   let female = [];

//   for (let i = 0; i < students.length; i++) {
//     if (students[i].gender === 'male') {
//       male.push(students[i].name);
//       if (male.length === 2) {
//         output.push(male);
//         male = [];
//       }
//     } else {
//       female.push(students[i].name);
//       if (female.length === 2) {
//         output.push(female);
//         female = [];
//       }
//     }
//   }

//   if (male.length > 0) {
//     output.push(male);
//   }
//   if (female.length > 0) {
//     output.push(female);
//   }

//   return output;
// }

function pairs(studentList, result) {
  while (studentList.length > 0) {}

  return result;
}

function seatingArrangement(students) {
  const male = [];
  const female = [];
  const listStudents = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].gender === 'male') {
      male.push(students[i].name);
    } else if (students[i].gender === 'female') {
      female.push(students[i].name);
    }
  }
  // listStudents.push(male.splice(0, 2));
  // listStudents.push(female.splice(0, 2));
  // listStudents.push(female);
  // listStudents.push(male);
  while (male.length > 0) {
    listStudents.push(male.splice(0, 2));
  }
  while (female.length > 0) {
    listStudents.push(female.splice(0, 2));
  }

  return listStudents;
}

const students = [
  {
    name: 'Adi',
    gender: 'male',
  },
  {
    name: 'Budi',
    gender: 'male',
  },
  {
    name: 'Cindy',
    gender: 'female',
  },
  {
    name: 'Susi',
    gender: 'female',
  },
  {
    name: 'Santi',
    gender: 'female',
  },
  {
    name: 'Robi',
    gender: 'male',
  },
  {
    name: 'Arrizal',
    gender: 'male',
  },
  {
    name: 'Rahmat',
    gender: 'male',
  },
];

// console.log(seatingArrangement(students));
/*
    [
        ['Adi', 'Budi],
        ['Cindy', 'Susi'],
        ['Santi'],
        ['Robi']
    ]
*/

const numbers = [5, 1, 2, 7, 2];

const sum = numbers.reduce(
  (prev, total) => prev + total,
  0,
);

// console.log(sum);
