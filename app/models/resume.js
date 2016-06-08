// resume model ===================
// contains the structure of the backend resume object.
// need to define a schema and associated model to implement
var mongoose = require('mongoose'); // grab the mongoose module
var resumeSchema = new mongoose.Schema({ // mongoose schema to hold doc structure
	email			        : { type: String, required: true },
	resume			      : String,
	ver			          : Number,
	created_at        : Date,
  updated_at        : Date
});


resumeSchema.pre("save",function(next) { // pre save method to add date fields
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

module.exports = mongoose.model('Resume', resumeSchema); // set in module.exports for reuse