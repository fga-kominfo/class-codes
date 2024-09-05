function selectionSort(arr) {
  console.log(`Sebelum di sort ${arr}`);

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      // const temp = arr[i]
      // arr[i] = arr[minIndex]
      // arr[minIndex] = temp
    }
    console.log(`proses ke ${i + 1} = ${arr}`);
  }

  return arr;
}

// function insertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const key = arr[i]; // base value

//     // loop while dimulai dari index sebelum key
//     let j = i - 1;

//     // loop akan berjalan selama j lebih besar dari 0 dan value iterasi j lebih besar di base value
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = key;
//   }

//   return arr;
// }

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left[0]);
      left = left.slice(1);
    } else {
      result.push(right[0]);
      right = right.slice(1);
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

const array1 = [5, 2, 1, 9, 4]; //[1, 2, 4, 5, 9]
const array2 = [27, 38, 4, 43, 9, 82, 10]; // [4, 9, 10, 27, 38, 43, 82]
// console.log(selectionSort(array1));
console.log(mergeSort(array1));
