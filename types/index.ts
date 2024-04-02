export interface User {
  clerkId: String,
  email: String,
  username: String,
  firstname: String,
  lastname: String,
  balance?: Number,
  image?: String
}

export interface updatedUserInterface {
  username: String,
  firstname: String,
  lastname: String,
  image?: String
}
export interface Transaction {
  clerkId: String,
  category: String,
  amount: Number,
}
