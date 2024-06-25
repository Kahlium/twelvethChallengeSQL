const inquirer = require('inquirer');

//--------QUESTIONS----------------
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
        name: "department_name"
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

//fetch request from the inquirer to get info from the server api

function viewAllDepartments() {
    fetch('http://localhost:3001/api/department')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.data);
        })
}

function viewAllRoles() {
    fetch('http://localhost:3001/api/roles')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.data);
        })
}

function viewAllEmployees() {
    fetch('http://localhost:3001/api/employee')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.data);
        })
}


function postDepartment(department) {
    fetch('api/department', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(department),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


inquirer
    .prompt(initialQuestion)
    .then((response) => {
        if (response.actions === "View all departments") {
            viewAllDepartments()
        }
        if (response.actions === "View all roles") {
            viewAllRoles()
        }
        if (response.actions === "View all employees") {
            viewAllEmployees()
        }
        if (response.actions === "Add a department") {
            inquirer
            .prompt(departmentAdd)
            .then((departmentAddResponse) => {
                postDepartment(departmentAddResponse);
            })
        }
    })