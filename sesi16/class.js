class Employee {
  #ktp;
  constructor(name, position, salary, department, ktp) {
    this.name = name;
    this.race = 'human';
    this.nationality = 'Indonesia';
    this.position = position;
    this.salary = salary;
    this.department = department;
    this.#ktp = ktp;
  }
  doWork() {
    console.log('work work work', this.name);
  }

  #getSecretKey() {
    return 'secret';
  }

  sesuatu() {}

  getIdentityNumber() {
    let maskedKtp = '';
    for (let i = 0; i < this.#ktp.length; i++) {
      const char = this.#ktp[i];
      if (i > 1 && i < this.#ktp.length - 1 - 2) {
        maskedKtp += '*';
      } else {
        maskedKtp += char;
      }
    }
    return maskedKtp;
  }

  getEmployeeNumber() {
    const secretValue = this.#getSecretKey();
    return 'FE-Eng-008';
  }
}

class FrontEnd extends Employee {
  constructor(name, salary, techStacks, ktp) {
    super(
      name,
      'FrontEnd Engineer',
      salary,
      'Engineering',
      ktp,
    );
    this.techStacks = techStacks;
  }

  doWork() {
    console.log(
      `${this.name} coding with ${this.techStacks.join(
        ', ',
      )}`,
    );
  }

  something() {
    console.log('Only frontend engineer have this');
  }
}

class GeneralAffair extends Employee {
  constructor(name, salary, certification, ktp) {
    super(
      name,
      'General Affair',
      salary,
      'Human Resource',
      ktp,
    );
    this.certification = certification;
  }
}

class EmployeeFactory {
  static createEmployee(
    type,
    name,
    salary,
    techStacks,
    certification,
    ktp,
  ) {
    switch (type) {
      case 'FE':
        return new FrontEnd(name, salary, techStacks, ktp);
      case 'GA':
        return new GeneralAffair(
          name,
          salary,
          certification,
          ktp,
        );
      default:
        break;
    }
  }
}

const employees = [
  {
    type: 'FE',
    name: 'Dudung',
    position: 'FrontEnd Engineer',
    salary: 10000000,
    department: 'Engineering',
    techStacks: ['React', 'Vue', 'Angular'],
    ktp: '123123',
  },
  {
    type: 'GA',
    name: 'Dadang',
    position: 'General Affair',
    salary: 5000000,
    department: 'Human Resource',
    certification: 'Halal',
    ktp: '123123',
  },
  {
    type: 'GA',
    name: 'Dedeng',
    position: 'Security',
    salary: 4000000,
    department: 'Common',
    ktp: '123123',
    certification: 'Haram',
  },
];

const employeesInstance = employees.map(employee => {
  const {
    type,
    name,
    position,
    salary,
    department,
    certification,
    techStacks,
    ktp,
  } = employee;
  return EmployeeFactory.createEmployee(
    type,
    name,
    salary,
    techStacks,
    certification,
    ktp,
  );
});

console.log(employeesInstance);

const dudung = EmployeeFactory.createEmployee(
  'FE',
  'Dudung',
  10,
  ['a', 'b', 'c'],
  null,
  '123123123123',
);

// const dadang = new GeneralAffair(
//   'Dadang',
//   5000000,
//   'Halal',
// );
// const dedeng = new Employee(
//   'Dedeng',
//   'Security',
//   4000000,
//   'Common',
// );
// console.log(dudung);
// const idNumber = dudung.getIdentityNumber();
// const employeeId = dudung.getEmployeeNumber();
// console.log(idNumber);
// console.log(employeeId);
