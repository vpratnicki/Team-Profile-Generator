const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

//making sure manager inherited the employee class
test('create manager name object', () => {
    const name = 'Nala';
    const manager = new Manager(name);
    expect(manager.name).toBe(name);
});

test('create manager id object', () => {
    const testId = 450;
    const manager = new Manager('Nala', testId);
    expect(manager.id).toBe(testId);
});

test('create manager email', () => {
    const testEmail = 'meow@cat.net';
    const manager = new Manager('Nala', 450, testEmail);
    expect(manager.email).toBe(testEmail);
});

test('create manager office number', () => {
    const testOfficeNumber = '443-220-1234';
    const manager = new Manager('Nala', 450, 'meow2@cat.net', testOfficeNumber);
    expect(manager.officeNumber).toBe(testOfficeNumber);
});

test('gets manager role', () => {
    const manager = new Manager ('Nala', 450, 'meow@cat.net');
    expect(manager.role).toBe('Manager');
});