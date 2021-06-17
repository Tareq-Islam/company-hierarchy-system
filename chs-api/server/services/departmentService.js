"use strict";
// import department model
const Department = require("../models/Department");

async function getDepartment(page = 1, pageSize = 20, status) {
  try {
    let department;
    if (status) {
      department = await Department.find({
        isDeleted: false,
        isActive: status === "inactive" ? false : true,
      })
        .select("name description isActive date")
        .skip(page * pageSize - pageSize)
        .limit(pageSize)
        .sort({ name: "asc" });
    } else {
      department = await Department.find({ isDeleted: false })
        .select("name description isActive date")
        .skip(page * pageSize - pageSize)
        .limit(pageSize);
    }

    if (department) {
      return {
        success: true,
        data: department,
      };
    }
    return {
      success: false,
      message: "Department not found.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function insertDepartment(department) {
  const { name, description } = department;
  const newDepartment = new Department({ name, description });
  try {
    const em = await newDepartment.save();
    if (em) {
      return {
        success: true,
        message: "Department successfully inserted.",
      };
    }
    return {
      success: false,
      message: "Department not insert.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function updateDepartment(department) {
  const { id, name, description } = department;
  try {
    const updateDepartment = await Department.findOneAndUpdate(id, {
      name,
      description,
    });
    if (updateDepartment) {
      return {
        success: true,
        message: "Department successfully updated.",
      };
    }
    return {
      success: false,
      message: "Department not update.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function statusUpdateDepartment(department) {
  try {
    const { id, isActive } = department;
    const updateDepartment = await Department.findOneAndUpdate(id, {
      isActive: isActive,
    });
    if (updateDepartment) {
      return {
        success: true,
        message: "Department status successfully updated.",
      };
    }
    return {
      success: false,
      message: "Department not delete.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function deleteDepartment(id) {
  try {
    const deletedDepartment = await Department.findOneAndUpdate(id, {
      isDeleted: true,
    });
    if (deletedDepartment) {
      return {
        success: true,
        message: "Department successfully deleted.",
      };
    }
    return {
      success: false,
      message: "Department not delete.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

module.exports = {
  get: getDepartment,
  changeStatus: statusUpdateDepartment,
  create: insertDepartment,
  update: updateDepartment,
  delete: deleteDepartment,
};
