const connection = require("./connection");

class departmentDatabase {
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

    addRole(title, salary) {
        return this.connection.promise().query("INSERT INTO roles(title, salary) VALUES (?, ?)", [title, salary])
    }

    addEmployee(first_name, last_name, role_id, manager_id) {
        return this.connection.promise().query("INSERT INTO Employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", 
        [first_name, last_name, role_id, manager_id])
    }

    deleteDepartment(id) {
        return this.connection.promise().query("DELETE FROM department WHERE id = ?", id)
    }

    deleteRole(title, salary) {
        return this.connection.promise().query("DELETE FROM roles WHERE id = ?", [title, salary])
    }

    deleteEmployee(first_name, last_name, role_id, manager_id) {
        return this.connection.promise().query("DELETE FROM employee WHERE id = ?", [first_name, last_name, role_id, manager_id])
    }
}

module.exports = new departmentDatabase(connection);
