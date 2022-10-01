const Employee = require('../lib/Employee.js');

// test('creates employee name object', () => {
//     const employee = new Employee ('Charles');

//     expect(employee.name).toBe('Charles');
//     // expect(employee.id).toBe('350');
//     // expect(emplyee.email).toBe('meow@cat.net');
// });

test('create employee name object', () => {
    const name = 'Charles';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('create employee id object', () => {
    const testId = 350;
    const e = new Employee('Charles', testId);
    expect(e.id).toBe(testId);
});
