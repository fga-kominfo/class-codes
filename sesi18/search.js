// function linearSearch(arr, toFind) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === toFind) {
//       return `${toFind} di temukan di index ${i}`;
//     }
//   }

//   return 'Not Found';
// }

// const list = [5, 2, 8, 1, 3, 10];

function binarySearch(arr, toFind) {
  let lowIndex = 0;
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    const median = Math.floor((lowIndex + highIndex) / 2);

    if (arr[median] === toFind) {
      // apakah record di index median merupakan data yang dicari?
      console.log(arr);

      return `${toFind} di temukan di index ${median}`;
    } else {
      if (arr[median] < toFind) {
        // tanya apakah record di index median lebih kecil dari data yang dicari?
        lowIndex = median + 1;
      } else {
        highIndex = median - 1;
      }
    }
  }

  return 'Not Found';
}
const list = [1, 3, 8, 11, 12, 78, 89, 101];

console.log(binarySearch(list, 78));
