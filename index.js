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

//fetch request from the inquirer to get info from the server api

function viewAllEmployees() {
    fetch('http://localhost:3001/api/employee')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.data);
        })
}


inquirer
    .prompt(initialQuestion)
    .then((response) => {
        if (response.actions === "Add a department") {
            inquirer.prompt(departmentAdd).then((departmentAddResponse) => {
                console.log(departmentAddResponse);
            })
        }
        if (response.actions === "View all employees") {
            viewAllEmployees()
        }
    })