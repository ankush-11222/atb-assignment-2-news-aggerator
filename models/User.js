const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: [{ type: String, maxlength: 20 }],
});

module.exports = mongoose.model("User", userSchema);
