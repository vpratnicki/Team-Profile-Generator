const Employee = require('./Employee');

class Manager extends Employee {
    constructor(number = '') {
        // super(role);
        // this.role = 'Manager';
        this.number = number;
    }
    
}

module.exports = Manager;