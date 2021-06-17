// import core module
const mongoose = require("mongoose");

// create a schema
const RoleSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    maxLength: 50,
    lowercase: true,
  },
  description: {
    type: String,
    maxLength: 200,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  roleId: Number
});

module.exports = mongoose.model("Role", RoleSchema);
