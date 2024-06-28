

class InquirerFunctions {

    viewAllDepartments() {
        fetch('http://localhost:3001/api/department')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data.data);
            })
    }

    viewAllRoles() {
        fetch('http://localhost:3001/api/roles')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data.data);
            })
    }

    viewAllEmployees() {
        fetch('http://localhost:3001/api/employee')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data.data);
            })
    }

    postDepartment(department) {
        console.log("POST department", JSON.stringify(department))
        fetch('http://localhost:3001/api/department2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(department),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data)
                return data;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    postRoles(roles) {
        fetch('api/roles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(roles),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    postEmployee(employee) {
        fetch('api/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
};


module.exports = InquirerFunctions;