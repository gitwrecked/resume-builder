// user model ===================
// contains the structure of the backend user object.
// need to define a schema and associated model(collection) to implement
var mongoose = require('mongoose'); // grab the mongoose module
var userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  created_at: Date,
  updated_at: Date
});

// helpers can be added to schema like so
userSchema.methods.isAdmin = function() {
	return this.admin
};

// pre methods can be added here, password hashing for example
userSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
