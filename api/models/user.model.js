const mongoose = require("mongoose");

// UserSchema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  img: { type: String, default: "" },
  mobile: { type: String, required: true },
  profession: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: String, required: true },
  desc: { type: String, required: true },
});

// create a Collection | model
const UserModel = mongoose.model("User", UserSchema);

// exports
module.exports = UserModel;
