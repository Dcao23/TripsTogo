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
    },
    trips: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Trip',
      },
    ],

});

  //hash password before saving to database
  userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  });

  //compare password
  userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  }

  const User = model('User', userSchema);

  module.exports = User;