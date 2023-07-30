import mongoose from "mongoose";

const schema = new mongoose.Schema({
  auth0_uid: { type: String, required: true, unique: true },
  picture: { type: String, default: null },
  name: { type: String, default: null },
  age: { type: Number, default: null },
  gender: { type: String, default: null },
  weight: { type: Number, default: null },
  height: { type: Number, default: null },
});

const User = mongoose.model("User", schema);

export default User;
