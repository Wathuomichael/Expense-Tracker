export interface User {
  clerkId: String,
  email: String,
  username: String,
  firstname: String,
  lastname: String,
  balance: Number,
  photo: String
}

export interface Transaction {
  clerkId: String,
  category: String,
  amount: Number,
}
