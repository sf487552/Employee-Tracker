const inquirer = require('inquirer');
require('console.table');
const database = require("./db/departmentDB");

//Function to start the main prompt 
function startPrompt() {
    const startArray =
        [
            {
                type: 'list',
                name: 'main',
                message: 'Please choose an option',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department',
                    'Add a role', 'Add an employee', 'Update an employee role']
            }
        ];
    inquirer.prompt(startArray).then(data => {
        //If statements to handle different user options
        if (data.main === 'View all departments') {
            getAllDepartments();
        }
        else if (data.main === 'View all roles') {
            getAllRoles();
        }
        else if (data.main === 'View all employees') {
            getAllEmployees();
        }
        else if (data.main === 'Add a department') {
            addDeptPrompt();
        }
        else if (data.main === 'Add a role') {
            addRolePrompt();
        }
        else if (data.main === 'Add an employee') {
            addEmployeePrompt();
        }
        else if (data.main === 'update an employee role') {
            updatedRolePrompt();
        }
    });
}

function getAllDepartments() {
    database.selectAllDepartments().then(data => {
        // console.log(data[0]);
        console.table(data[0]);
    })
        .then(() => {
            return startPrompt();
        })
}
function getAllRoles() {
    database.selectAllRoles().then(data => {
        // console.log(data[0]);
        console.table(data[0]);
    })
        .then(() => {
            return startPrompt();
        })
}
function getAllEmployees() {
    database.selectAllEmployees().then(data => {
        // console.log(data[0]);
        console.table(data[0]);
    })
        .then(() => {
            return startPrompt();
        })
}
//Function to display applicable questions if user wants to add a new department       
function addDeptPrompt() {
    const addDepartArray =
        [
            {
                type: 'input',
                name: 'name',
                message: 'Please enter new department name',
            }
        ]
    inquirer.prompt(addDepartArray).then(data => {
        database.addDepartment(data.name).then(() => {
            console.log('Successfully added!')
        })
            .then(() => {
                return startPrompt();
            })
    });
}
//Function to display applicable questions if user wants to add a new role
function addRolePrompt() {
    const addRoleArray =
        [
            {
                type: 'input',
                name: 'title',
                message: 'Please enter new role name',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Please enter the new role salary',
            },
        ]
    inquirer.prompt(addRoleArray).then(data => {
        database.addRole(data.title, data.salary, data.dept_id).then(() => {
            console.log('Successfully added!')
        })
            .then(() => {
                return startPrompt();
            })
    });
}

function addEmployeePrompt() {
    const addEmployeeArray =
        [
            {
                type: 'input',
                name: 'first_name',
                message: 'Please enter first name',
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Please enter last name',
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'please enter Role ID',
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'please enter Manager ID',
            },
        ]
    inquirer.prompt(addEmployeeArray).then(data => {
        database.addEmployee(data.first_name, data.last_name, data.role_id, data.manager_id).then(() => {
            console.log('Successfully added!')
        })
            .then(() => {
                return startPrompt();
            })
    });
}

startPrompt()