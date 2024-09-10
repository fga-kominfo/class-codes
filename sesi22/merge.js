const fs = require('fs');

fs.readFile(
  './employees.json',
  'utf-8',
  (err, employeeData) => {
    if (err) {
      throw err;
    }
    fs.readFile(
      './spouses.json',
      'utf-8',
      (err, spousesData) => {
        if (err) {
          throw err;
        }
        fs.readFile(
          './children.json',
          'utf-8',
          (err, childrenData) => {
            if (err) {
              throw err;
            }
            const {children} = JSON.parse(childrenData);
            const {employees} = JSON.parse(employeeData);
            const {spouses} = JSON.parse(spousesData);
            console.log(children);
            const result = employees.map(employee => {
              const spouse = spouses.find(
                spouse =>
                  spouse.employee_id === employee.id,
              );

              if (spouse) {
                employee.spouse = spouse;
              }

              const childrens = children.filter(
                child => child.employee_id === employee.id,
              );

              if (childrens.length > 0) {
                employee.children = childrens;
              }

              return employee;
            });
            console.log(result);
          },
        );
      },
    );
  },
);
