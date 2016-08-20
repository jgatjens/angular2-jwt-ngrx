import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

let userSchema = new mongoose.Schema({
		"gender": String,
		"name": String,
		"email": { type: String, required: true },
		"username": { type: String, required: true, index: { unique: true } },
		"password": { type: String, required: true },
		"phone": String,
		"cell": String,
		"location": {
			"street": String,
			"city": String,
			"state": String,
			"zip": Number
		},
		"picture": {
			"large": String,
			"medium": String,
			"thumbnail": String
		}
});


userSchema.pre('save', function(next) {

   let user = this;

	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();

	// generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
	  if (err) return next(err);

	  // hash the password using our new salt
	  bcrypt.hash(user.password, salt, function(err, hash) {
	      if (err) return next(err);

	      // override the cleartext password with the hashed one
	      user.password = hash;
	      next();
	  });
	});
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// Include text index so then we can make searchs
userSchema.index({ email: 'text', username: 'text'});

module.exports = mongoose.model('User', userSchema);
