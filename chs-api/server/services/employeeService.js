"use strict"
function getEmployee() {
    console.log('get all employee list');
}

function insertEmployee(employee) {
    console.log('insert employee');
}

function updateEmployee(id, employee) {
    console.log('update employee');
}

function deleteEmployee(id) {
    console.log('delete employee');
}

module.exports = {
    get: getEmployee,
    create: insertEmployee,
    update: updateEmployee,
    delete: deleteEmployee
}