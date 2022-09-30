const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('getName method', () => {
        it('displays the name of the employee', () => {
            const employee = new Employee('Charles');

            expect(employee.name).toBe('Dave');
        })
    })
});