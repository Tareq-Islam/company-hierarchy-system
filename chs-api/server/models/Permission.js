// import core module
const mongoose = require("mongoose");

// create a schema
const PermissionSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  }, 
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  perentId: String,
  userId: String,  
  departmentId: String,
  roleId: String,
});

module.exports = mongoose.model("Permission", PermissionSchema);
