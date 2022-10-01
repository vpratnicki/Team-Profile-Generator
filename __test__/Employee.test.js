const Employee = require('../lib/Employee.js');

// test('creates employee name object', () => {
//     const employee = new Employee ('Charles');

//     expect(employee.name).toBe('Charles');
//     // expect(employee.id).toBe('350');
//     // expect(emplyee.email).toBe('meow@cat.net');
// });

test('create employee name object', () => {
    const name = 'Charles';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('create employee id object', () => {
    const testId = 350;
    const employee = new Employee('Charles', testId);
    expect(employee.id).toBe(testId);
});

test('create employee email', () => {
    const testEmail = 'meow@cat.net';
    const employee = new Employee('Charles', 350, testEmail);
    expect(employee.email).toBe(testEmail);
});
