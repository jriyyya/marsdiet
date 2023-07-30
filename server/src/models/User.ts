import mongoose from "mongoose";

const schema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  picture: { type: String, default: null },
  name: { type: String, default: null },
  age: { type: Number, default: null },
  gender: { type: String, default: null },
  weight: { type: Number, default: null },
  height: { type: Number, default: null },
  diabetic: { type: Boolean, default: false },
});

const User = mongoose.model("User", schema);

export default User;
