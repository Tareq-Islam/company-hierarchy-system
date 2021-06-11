// import core module
const mongoose = require("mongoose");

const commonTypes = {
  type: String,
  require: true,
  trim: true,
  lowercase: true
};

// create a schema
const EmployeeSchema = mongoose.Schema({
  firstName: {
    ...commonTypes,
    maxLength: 50
  },
  lastName: {
    ...commonTypes,
    maxLength: 50
  },
  email: {
    type: String,
    trim: true,
    maxLength: 100,
  },
  mobile: {
    type: Number,
    require: true,
    trim: true,
    maxLength: 13,
    minLength: 11,
  },
  departmentId: Number,
});

module.exports = mongoose.model("Employee", EmployeeSchema);
