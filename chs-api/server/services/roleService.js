"use strict";
// import role model
const Role = require("../models/Role");

async function getRole(page = 1, pageSize = 20) {
  try {
    const role = await Role.find({
      isDeleted: false,
    })
      .select("name description date")
      .skip(page * pageSize - pageSize)
      .limit(pageSize)
      .sort({ name: "asc" });

    if (role) {
      return {
        success: true,
        data: role,
      };
    }
    return {
      success: false,
      message: "Role not found.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function insertRole(role) {
  const { name, description } = role;
  const newRole = new Role({ name, description });
  try {
    const createRole = await newRole.save();
    if (createRole) {
      return {
        success: true,
        message: "Role successfully inserted.",
      };
    }
    return {
      success: false,
      message: "Role not insert.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function updateRole(role) {
  const { id, name, description } = role;
  try {
    const updateRole = await Role.findOneAndUpdate(id, {
      name,
      description,
    });
    if (updateRole) {
      return {
        success: true,
        message: "Role successfully updated.",
      };
    }
    return {
      success: false,
      message: "Role not update.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function deleteRole(id) {
  try {
    const isDelete = await Role.findOneAndUpdate(id, {
      isDeleted: true,
    });
    if (isDelete) {
      return {
        success: true,
        message: "Role successfully deleted.",
      };
    }
    return {
      success: false,
      message: "Role not delete.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

module.exports = {
  get: getRole,
  create: insertRole,
  update: updateRole,
  delete: deleteRole,
};
