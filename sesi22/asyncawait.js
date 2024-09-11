const fs = require('fs').promises;
// function capitalize(string) {
//   return new Promise((resolve, reject) => {
//     if (typeof string !== 'string')
//       reject({
//         error: 'error di capitalize',
//         type: 'capitalize',
//       });
//     setTimeout(() => {
//       resolve(string.toUpperCase());
//     }, 200);
//   });
// }
// function reverseWord(string) {
//   return new Promise((resolve, reject) => {
//     if (typeof string !== 'string')
//       reject({error: 'error di reverseWord'});
//     setTimeout(() => {
//       resolve(string.split('').reverse().join(''));
//     }, 200);
//   });
// }

// function alayWord(string) {
//   const dictionary = {
//     a: '4',
//     e: '3',
//     g: '9',
//     i: '1',
//     o: '0',
//     z: '2',
//     s: '5',
//     j: '7',
//   };
//   return new Promise((resolve, reject) => {
//     if (typeof string !== 'string')
//       reject({error: 'error di alay'});

//     setTimeout(() => {
//       let result = '';
//       for (let i = 0; i < string.length; i++) {
//         if (dictionary[string[i]]) {
//           result += dictionary[string[i]];
//         } else {
//           result += string[i];
//         }
//       }

//       resolve(result);
//     }, 200);
//   });
// }

// async function encrypt(string) {
//   try {
//     const alay = await alayWord(string);
//     const reversedString = await reverseWord(alay);
//     const encryptedPassword = await capitalize(
//       reversedString,
//     );
//     console.log(encryptedPassword);
//   } catch (error) {
//     console.log(error, '<<<error');
//   }
// }

// encrypt('arrizal');

async function mergeEmployees() {
  try {
    const {employees} = JSON.parse(
      await fs.readFile('./employees.json', 'utf-8'),
    );

    const {spouses} = JSON.parse(
      await fs.readFile('./spouses.json', 'utf-8'),
    );

    const {children} = JSON.parse(
      await fs.readFile('./children.json', 'utf-8'),
    );

    const mergedEmployees = employees.map(employee => {
      const spouse = spouses.find(
        spouse => spouse.employee_id === employee.id,
      );

      if (spouse) {
        employee.spouse = spouse;
      }

      const childrens = children.filter(
        child => child.employee_id === employee.id,
      );

      if (childrens.length) {
        employee.children = childrens;
      }

      return employee;
    });

    await fs.writeFile(
      './merged-employees-async-await.json',
      JSON.stringify(mergedEmployees, null, 2),
    );
  } catch (error) {
    console.log(error, '<<error');
  }
}

mergeEmployees();
