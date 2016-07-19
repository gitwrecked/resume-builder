// user model ===================
// contains the structure of the backend user object.
// need to define a schema and associated model(collection) to implement
var mongoose = require('mongoose'); // grab the mongoose module
var bcrypt = require('bcrypt-nodejs'); //bcrypt module
var ResumeProfile = require('server/models/resumeProfile');
var userSchema = new mongoose.Schema({ // mongoose schema to hold doc structure
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    resumeProfile: [ResumeProfile],
    created_at: Date,
    updated_at: Date
});

userSchema.pre("save", function(next) { // pre save method to check if user already exists
    mongoose.models.User.findOne({
        email: this.email
    }, function(err, user) {
        if (user) {
            console.log(user);
            next(new Error("user", "email already in use"));
        } else {
            next();
        }
    });
});

userSchema.pre('save', function(next) { // pre save method to add date fields
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password);

    next();
});

// userSchema.pre("save",function(next) {
//     if(this.password_conf !== this.password) {
//         next(new Error("Must specify the password confirmation"));
//     }
//     else {
//         next();
//     }
// });

module.exports = mongoose.model('User', userSchema); // set in module.exports for reuse