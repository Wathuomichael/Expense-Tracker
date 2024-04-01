import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  username: {
    type: String,
    required: true,
    unique: true
  },

  firstname: {
    type: String
  },

  lastname: {
    type: String
  },

  balance: {
    type: Number,
    default: 0
  }
}, 
  {
    timestamps: true
  }
);

export const userModel = mongoose.model('user', userSchema);
