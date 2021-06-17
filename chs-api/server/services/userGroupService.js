"use strict";
// import Permission model
const Permission = require("../models/Permission");

async function getUserGroup(page = 1, pageSize = 20, status) {
  try {
    let permission;
    if (status) {
      permission = await Permission.find({
        isDeleted: false,
        isActive: status === "inactive" ? false : true,
      })
        .select("name description isActive date")
        .skip(page * pageSize - pageSize)
        .limit(pageSize)
        .sort({ name: "asc" });
    } else {
      permission = await Permission.find({ isDeleted: false })
        .select("name description isActive date")
        .skip(page * pageSize - pageSize)
        .limit(pageSize);
    }

    if (permission) {
      return {
        success: true,
        data: permission,
      };
    }
    return {
      success: false,
      message: "User Group not found.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function createUserGroup(group) {
  const permission = new Permission(group);
  try {
    const createGroup = await permission.save();
    if (createGroup) {
      return {
        success: true,
        message: "User Group successfully inserted.",
      };
    }
    return {
      success: false,
      message: "User Group not create.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function updateUserGroup(group) {
  const { id, name, description } = group;
  try {
    const updateRole = await Permission.findOneAndUpdate(id, {
      name,
      description
    });
    if (updateRole) {
      return {
        success: true,
        message: "User Group successfully updated.",
      };
    }
    return {
      success: false,
      message: "User Group not update.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

async function deleteUserGroup(id) {
  try {
    const isDelete = await Role.findOneAndUpdate(id, {
      isDeleted: true,
    });
    if (isDelete) {
      return {
        success: true,
        message: "User Group successfully deleted.",
      };
    }
    return {
      success: false,
      message: "User Group not delete.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server error.",
    };
  }
}

module.exports = {
  get: getUserGroup,
  create: createUserGroup,
  update: updateUserGroup,
  delete: deleteUserGroup,
};
