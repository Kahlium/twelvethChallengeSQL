const inquirer = require('inquirer');

const initialQuestion = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "actions",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    },
];

const departmentAdd = [
    {
        type: "input",
        message: "Enter the new department name",
        name: "newDepartment"
    }
];

const roleAdd = [
    {
        type: "input",
        message: "Enter the new role name",
        name: "newRole"
    },
    {
        type: "input",
        message: "Enter the salary for this role",
        name: "salary"
    },
    {
        type: "input",
        message: "Enter the department for this role",
        name: "roleDepartment"
    }
];

const employeeAdd = [
    {
        type: "input",
        message: "Enter the employee's first name",
        name: "firstName"
    },
    {
        type: "input",
        message: "Enter the employee's last name",
        name: "lastName"
    },
    {
        type: "input",
        message: "Enter the employee's role",
        name: "employeeRole"
    },
    {
        type: "input",
        message: "Enter the employee's manager",
        name: "manager"
    }
]