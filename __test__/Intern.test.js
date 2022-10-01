const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

//making sure intern inherited the employe classes
test('create intern name object', () => {
    const name = 'Charles';
    const intern = new Intern(name);
    expect(intern.name).toBe(name);
});

test('create intern id object', () => {
    const testId = 350;
    const intern = new Intern('Charles', testId);
    expect(intern.id).toBe(testId);
});

test('create intern email', () => {
    const testEmail = 'meow@cat.net';
    const intern = new Intern('Charles', 350, testEmail);
    expect(intern.email).toBe(testEmail);
});
