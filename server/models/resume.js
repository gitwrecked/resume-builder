// resume model ===================
// contains the structure of the backend resume object.
// need to define a schema and associated model to implement

// grab the mongoose module
var mongoose = require('mongoose');
// mongoose schema to hold doc structure
var resumeSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['original', 'modified'],
        required: true
    },
    summary: String,
    qualifications: String,
    experience: String,
    education: String,
    ver: Number,
    created_at: Date,
    updated_at: Date
});

// pre save method to add date fields
resumeSchema.pre("save", function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

//update the timestamps for every update
resumeSchema.pre("update", function(next) {
    this.update({}, {
        $set: {
            updated_at: new Date()
        }
    });
    next();
});

module.exports = mongoose.model('Resume', resumeSchema); // set in module.exports for reuse