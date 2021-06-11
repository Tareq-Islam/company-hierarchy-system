"use strict"
function getDepartment() {
    console.log('get all department list');
}

function insertDepartment(department) {
    console.log('insert department');
}

function updateDepartment(id, department) {
    console.log('update department');
}

function deleteDepartment(id) {
    console.log('delete department');
}

module.exports = {
    get: getDepartment,
    create: insertDepartment,
    update: updateDepartment,
    delete: deleteDepartment
}