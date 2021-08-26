const connection = require("./connection");

class DepartmentDatabase {
    constructor(connection) {
        this.connection = connection;
    }

    selectAllDepartments() {
        return this.connection.promise().query("SELECT * FROM department");
    }

    selectAllRoles() {
        return this.connection.promise().query("SELECT * FROM roles");
    }

    selectAllEmployees() {
        return this.connection.promise().query("SELECT * FROM employee");
    }

    selectOneDepartment() {
        return this.connection.promise().query("SELECT * FROM department WHERE id = ?", id);
    }

    selectOneRole() {
        return this.connection.promise().query("SELECT * FROM roles WHERE id = ?", id);
    }

    selectOneEmployee() {
        return this.connection.promise().query("SELECT * FROM employee WHERE id = ?", id);
    }

    addDepartment(name) {
        return this.connection.promise().query("INSERT INTO department(dept_name) VALUES (?)", name)
    }
}

module.exports = new DepartmentDatabase(connection);
