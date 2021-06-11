// import core module 
const mongoose = require('mongoose');

// create a schema
const DepartmentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50,
        lowercase: true
    },
    description: {
        type: String,
        maxLength: 200
    }
});


module.exports = mongoose.model('Department', DepartmentSchema);