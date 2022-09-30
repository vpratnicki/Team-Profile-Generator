class Employee {
    constructor(name = '') {
        this.name = name;
    }
    // constructor(id = '') {
    //     this.id = id;
    // }
    // constructor(email = '') {
    //     this.email = email;
    // }

    getName() {
        return `${this.name}`
    }

    getID() {
        return `${this.id}`
    }

    getEmail() {
        return `${this.email}`
    }
    // returns 'Employee'
    getRole() {
        return `Employee`
    }
}

module.exports = Employee;