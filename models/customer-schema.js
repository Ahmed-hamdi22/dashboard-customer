const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    country: String,
    email: String,
    phoneNumber: String,
    gender: String,
    age: Number,
  },
  { timestamps: true }
);
// create the model from the schema
const User = mongoose.model("user", UserSchema);

// export the model
module.exports = User;
