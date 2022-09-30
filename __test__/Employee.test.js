const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee ('Charles');

    expect(employee.name).toBe('Charles');
    // expect(employee.id).toBe('350');
    // expect(emplyee.email).toBe('meow@cat.net');
});