// resume profile model ===================
// contains the structure of the backend resume profile object.
// need to define a schema and associated model to implement
var mongoose = require('mongoose'); // grab the mongoose module

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
    originalResume: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resume'
    },
    modifiedResume: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resume'
    },
    created_at: Date,
    updated_at: Date
});

//pre save method to check if user exists
resumeProfileSchema.pre("save", function(next) {
    checkUser(next, this);
});

//pre save method to check if profile name already exists for user
resumeProfileSchema.pre("save", function(next) {
    checkDuplicateProfile(next, this);
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

//check if user exists
resumeProfileSchema.pre("update", function(next) {
    checkUser(next, this);
});

//pre save method to check if profile name already exists for user
resumeProfileSchema.pre("update", function(next) {
    checkDuplicateProfile(next, this);
});

//update the timestamps for every update
resumeProfileSchema.pre("update", function(next) {
    this.update({}, {
        $set: {
            updated_at: new Date()
        }
    });
    next();
});

function checkUser(next, profile) {
    mongoose.models.User.findOne({
        email: profile.email,
    }, function(err, user) {
        if (user) {
            next();
        } else {
            next(new Error("user for this email does not exist..."));
        }
    });
}

function checkDuplicateProfile(next, profile) {
    mongoose.models.ResumeProfile.findOne({
        email: profile.email,
        profileName: profile.profileName
    }, function(err, profile) {
        if (profile) {
            console.log(profile);
            next(new Error("profile name already exists for user..."));
        } else {
            next();
        }
    });
}

module.exports = mongoose.model('ResumeProfile', resumeProfileSchema); // set in module.exports for reuse