class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    // getName() 
    getName(name) {
        if (this.name === name) {
            console.log(`Employee's name is ${name}`);
        } else {
            console.log(`Sorry, employee not found`);
        }
    }
    // getId()
    getID(id) {
        if (this.id === id) {
            console.log(`Employee's ID is ${id}`);
        } else {
            console.log(`Sorry, employee ID not found`);
        }
    }
    // getEmail()
    getEmail(email) {
        if (this.email === email) {
            console.log(`Employee's email is ${email}`);
        } else {
            console.log(`Sorry, unable to find employee's email`);
        }
    }
// getRole() - returns 'Employee'
}
const role = [
    new Employee('Engineer'),
    new Employee('Manager'),
    new Employee('Intern')
];

module.exports = {
    Employee,
    role
};