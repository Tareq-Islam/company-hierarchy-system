"use strict";
// import employee model
const Employee = require("../models/Employee");

async function getEmployee(page = 1, pageSize = 20, status) {
  try {
    let employee;
    if (status) {
      employee = await Employee
      .find({ isDeleted: false, isActive: status === 'inactive' ? false : true })
      .select("firstName lastName email mobile isActive date")   
      .skip((page * pageSize) - pageSize)
      .limit(pageSize)
      .sort({firstName: 'asc'});
    } else {
      employee = await Employee
      .find({ isDeleted: false})
      .select('firstName lastName email mobile isActive date')
      .skip((page * pageSize) - pageSize)
      .limit(pageSize);
    }
   
    if (employee) {  
      return {
        success: true,
        data: employee,
      };
    }
    return {
      success: false,
      message: "Employee not found.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function insertEmployee(employee) {
  const { firstName, lastName, email, mobile } = employee;
  const newEmployee = new Employee({ firstName, lastName, email, mobile });
  try {
    const em = await newEmployee.save();
    if (em) {
      return {
        success: true,
        message: "Employee successfully inserted.",
      };
    }
    return {
      success: false,
      message: "Employee not insert.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function updateEmployee(employee) {
  const { id, firstName, lastName, email, mobile } = employee;
  try {
    const updateEmployee = await Employee.findOneAndUpdate(id, {
      firstName,
      lastName, 
      email, 
      mobile
    });
    if (updateEmployee) {
      return {
        success: true,
        message: "Employee successfully updated.",
      };
    }
    return {
      success: false,
      message: "Employee not update.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function statusUpdateEmployee(employee) {
  try {
    const { id, isActive } = employee;
    const updateEmployee = await Employee.findOneAndUpdate(id, {
      isActive: isActive
    });
    if (updateEmployee) {
      return {
        success: true,
        message: "Employee status successfully updated.",
      };
    }
    return {
      success: false,
      message: "Employee not delete.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function deleteEmployee(id) {
  try {
    const deletedEmployee = await Employee.findOneAndUpdate(id, {
      isDeleted: true,
    });
    if (deletedEmployee) {
      return {
        success: true,
        message: "Employee successfully deleted.",
      };
    }
    return {
      success: false,
      message: "Employee not delete.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

module.exports = {
  get: getEmployee,
  changeStatus: statusUpdateEmployee,
  create: insertEmployee,
  update: updateEmployee,
  delete: deleteEmployee,
};
