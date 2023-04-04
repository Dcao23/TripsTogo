const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 100,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
    },
    bio: {
        type: String,
        maxLength: 300,
    },
    profilePic: {
        type: String,
        required: false,
    },
    userTrips: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Trips',
      },
    ],

});

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

  const User = model('User', userSchema);

  module.exports = User;