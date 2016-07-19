// resume profile model ===================
// contains the structure of the backend resume profile object.
// need to define a schema and associated model to implement
var mongoose = require('mongoose'); // grab the mongoose module
var Resume = require('server/models/resume');
var resumeProfileSchema = new mongoose.Schema({ // mongoose schema to hold doc structure
    email: {
        type: String,
        requried: true
    },
    resume: {
        type: [Resume]
    },
    edited: {
        type: [Resume]
    },
    created_at: Date,
    updated_at: Date
});

resumeProfileSchema.pre("save", function(next) { // pre save method to add date fields
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

module.exports = mongoose.model('ResumeProfile', resumeProfileSchema); // set in module.exports for reuse