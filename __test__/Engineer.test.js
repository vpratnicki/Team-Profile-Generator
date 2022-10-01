const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

//making sure engineer inherited the employe class
test('create engineer name object', () => {
    const name = 'Charles';
    const engineer = new Engineer(name);
    expect(engineer.name).toBe(name);
});

test('create engineer id object', () => {
    const testId = 350;
    const engineer = new Engineer('Oreo', testId);
    expect(engineer.id).toBe(testId);
});

test('create engineer email', () => {
    const testEmail = 'meow@cat.net';
    const engineer = new Engineer('Oreo', 350, testEmail);
    expect(engineer.email).toBe(testEmail);
});

test('create engineer github username', () => {
    const testUsername = 'vpratnicki';
    const engineer = new Engineer('Oreo', 350, 'meow3@cat.net', testUsername);
    expect(engineer.github).toBe(testUsername);
});

test('gets engineer role', () => {
    const engineer = new Engineer ('Oreo', 350, 'meow3@cat.net', 'vpratnicki');
    expect(engineer.role).toBe('Engineer');
});