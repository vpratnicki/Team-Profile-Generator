const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = 5;
        this.role = 'Manager';
    }
    
}

module.exports = Manager;