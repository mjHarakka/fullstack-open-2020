const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    unique: true
  },
  name: {
    type: String,
    required: true,
    minLength: 3
  },
  passwordHash: {
    type: String,
    required: true,
    minLength: 3
  },
});

userSchema.set("toJson", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("user", userSchema);