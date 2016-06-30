// role model ===================
// contains the structure of the backend role object.
// need to define a schema and associated model to implement
var mongoose = require('mongoose'); // grab the mongoose module
var roleSchema = new mongoose.Schema({ // mongoose schema to hold doc structure
    role: {
        type: String,
        required: true,
        unique: true
    },
    created_at: Date,
    updated_at: Date
});

roleSchema.pre("save", function(next) { // pre save method to add date fields
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

module.exports = mongoose.model('Role', roleSchema); // set in module.exports for reuse