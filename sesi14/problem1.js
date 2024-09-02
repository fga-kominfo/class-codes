function countWord(str) {
  // your code here
  const charCount = {};

  for (let char of str) {
    if (char !== ' ') {
      // nabil
      // if (charCount[char]) {
      //   charCount[char]++;
      // } else {
      //   charCount[char] = 1;
      // }
      // ridwan
      //   charCount[char] = (charCount[char] || 0) + 1;
      //irwin
      if (!charCount[char]) {
        charCount[char] = 0;
      }
      charCount[char]++;
    }
  }

  return charCount;
}

console.log(countWord('I HAVE A DREAM'));
/*
{
    I: 1,
    H: 1,
    A: 3,
    V: 1,
    E: 2,
    D: 1,
    R: 1,
    M: 1
}
*/
console.log(countWord('HELLO WORLD'));
