<<<<<<< HEAD
const { Schema, model } = require('mongoose');
// for when bcrypt is installed
=======
const mongoose = require('mongoose');
>>>>>>> b12fd5dd81322fb76e8faa4ed4d87548e375b272
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    email: {
<<<<<<< HEAD
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
=======
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 100,
>>>>>>> b12fd5dd81322fb76e8faa4ed4d87548e375b272
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
    },

    myTrips: [
      {
        type: Schema.Type.ObjectId,
        ref: 'userTrips',
      },
    ],

});

<<<<<<< HEAD
// For when bcyrpt is installed
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
  
//   // compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
=======
  //hash password before saving to database
  userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
    next();
  });

  //compare password
  userSchema.methods.comparePassword = async function (password) {
    const user = this;
    return await bcrypt.compare(password, user.password);
  }
>>>>>>> b12fd5dd81322fb76e8faa4ed4d87548e375b272

  const User = mongoose.model('User', userSchema);

  module.exports = User;