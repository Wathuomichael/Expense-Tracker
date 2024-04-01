import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true
  },

  category: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  }
});

export const transactionModel = mongoose.model('transaction', transactionSchema);
