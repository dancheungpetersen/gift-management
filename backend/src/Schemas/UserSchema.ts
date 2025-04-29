import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  age: Number,
});
