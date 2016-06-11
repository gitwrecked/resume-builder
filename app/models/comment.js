// comment model ===================
// contains the structure of the backend comment object.
// need to define a schema and associated model to implement
var mongoose = require('mongoose'); // grab the mongoose module
var commentSchema = new mongoose.Schema({ // mongoose schema to hold doc structure
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created_at: Date
});

commentSchema.pre("save", function (next) { // pre save method to add date fields
    var currentDate = new Date();
    this.created_at = currentDate;
    next();
});

module.exports = mongoose.model('Comment', commentSchema); // set in module.exports for reuse
