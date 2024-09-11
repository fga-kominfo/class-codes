const fs = require('fs').promises;

// function getEmployees(cb) {
//   Promise.all([
//     fs.readFile('./employees.json', 'utf-8'),
//     fs.readFile('./spouses.json', 'utf-8'),
//     fs.readFile('./children.json', 'utf-8'),
//   ])
//     .then(([employeesData, spousesData, childrenData]) => {
//       //proses ketika promise berhasil di resolve
//       const {employees} = JSON.parse(employeesData);
//       const {spouses} = JSON.parse(spousesData);
//       const {children} = JSON.parse(childrenData);

//       const mergedEmployees = employees.map(employee => {
//         const spouse = spouses.find(
//           spouse => spouse.employee_id === employee.id,
//         );

//         if (spouse) {
//           employee.spouse = spouse;
//         }

//         const childrens = children.filter(
//           child => child.employee_id === employee.id,
//         );

//         if (childrens.length) {
//           employee.children = childrens;
//         }

//         return employee;
//       });
//       cb(mergedEmployees);

//       return fs.writeFile(
//         './merged-employees2.json',
//         JSON.stringify(mergedEmployees, null, 2),
//       );
//     })
//     .then(() => {
//       console.log('Merge Success');
//     })
//     .catch(err => {
//       // error handling ketika promise di reject (gagal)
//       console.log(err, '<<<err');
//     })
//     .finally(() => {
//       console.log('Proses merge selesai');
//     });
// }

// const something = fs.readFileSync(
//   './employees.json',
//   'utf-8',
// );
// console.log(something);

// module.exports = getEmployees;

// fs.readFile('./employees.json', 'utf-8')
//   .then(resEmployee => {
//     const {employees} = JSON.parse(resEmployee);
//     return fs.readFile('./spouses.json', 'utf-8');
//   })
//   .then(res => {
//     const {spouses} = JSON.parse(res);
//     console.log(resEmployee);
//     console.log(spouses);
//   });
