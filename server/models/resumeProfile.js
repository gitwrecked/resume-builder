// resume profile model ===================
// contains the structure of the backend resume profile object.
// need to define a schema and associated model to implement
var mongoose = require('mongoose'); // grab the mongoose module
// var Resume = require('server/models/resume');

//Resume schema
var resume = new mongoose.Schema({
    summary: String,
    qualifications: String,
    experience: String,
    education: String
    // ver: Number,
    // created_at: Date,
    // updated_at: Date
});

//Resume Profile mongoose schema
var resumeProfileSchema = new mongoose.Schema({
    email: {
        type: String,
        requried: true
    },
    profileName: {
        type: String,
        required: true
    },
    resume: {
        type: resume
    },
    edited: {
        type: resume
    },
    created_at: Date,
    updated_at: Date
});

//pre save method to check if profile name already exists for user
resumeProfileSchema.pre("save", function(next) {
    mongoose.models.ResumeProfile.findOne({
        email: this.email,
        profileName: this.profileName
    }, function(err, profile) {
        if (profile) {
            console.log(profile);
            next(new Error("profile name already exists for user..."));
        } else {
            next();
        }
    });
});

// pre save method to add date fields
resumeProfileSchema.pre("save", function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

module.exports = mongoose.model('ResumeProfile', resumeProfileSchema); // set in module.exports for reuse