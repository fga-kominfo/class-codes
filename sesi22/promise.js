// const greetings = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('The World is burning');
//   }, 1000);
// });

// greetings
//   .then(greetings => {
//     console.log(greetings);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// function checkNum(num) {
//   return new Promise((resolve, reject) => {
//     if (typeof num !== 'number') {
//       reject({error: 'Invalid parameter'});
//     }
//     if (num % 2 === 0) {
//       resolve({result: 'This number is even'});
//     } else if (num % 2 !== 0) {
//       resolve({result: 'This number is odd'});
//     }
//   });
// }

// checkNum(13)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.error(err);
//   });

function capitalize(string) {
  return new Promise((resolve, reject) => {
    if (typeof string !== 'string')
      reject({
        error: 'error di capitalize',
        type: 'capitalize',
      });
    setTimeout(() => {
      resolve(string.toUpperCase());
    }, 200);
  });
}

function reverseWord(string) {
  return new Promise((resolve, reject) => {
    if (typeof string !== 'string')
      reject({error: 'error di reverseWord'});
    setTimeout(() => {
      resolve(string.split('').reverse().join(''));
    }, 200);
  });
}

function alayWord(string) {
  const dictionary = {
    a: '4',
    e: '3',
    g: '9',
    i: '1',
    o: '0',
    z: '2',
    s: '5',
    j: '7',
  };
  return new Promise((resolve, reject) => {
    if (typeof string !== 'string')
      reject({error: 'error di alay'});

    setTimeout(() => {
      let result = '';
      for (let i = 0; i < string.length; i++) {
        if (dictionary[string[i]]) {
          result += dictionary[string[i]];
        } else {
          result += string[i];
        }
      }

      resolve(result);
    }, 200);
  });
}

function encrypt(string, cb) {
  alayWord(string)
    .then(result => {
      return reverseWord(result);
    })
    .then(resultReverse => {
      return capitalize(resultReverse);
    })
    .then(resultCapitalize => {
      cb(resultCapitalize);
    })
    .catch(err => {
      // error handling
      console.log(err);
    });
}

const password = 'akuseorangkapiten';

encrypt(password, encryptedPassword => {
  console.log(encryptedPassword);
});
