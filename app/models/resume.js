// resume model ===================
// contains the structure of the backend resume object.
// need to define a schema and associated model to implement
var mongoose = require('mongoose'); // grab the mongoose module
var resumeSchema = new mongoose.Schema({ // mongoose schema to hold doc structure
	owner			: String,
	content			: String
});

module.exports = mongoose.model('Resume', resumeSchema); // set in module.exports for reuse