'use server'

import { conn } from "../db";
import { transactionModel } from "@/models/transaction.model";
import { Transaction } from "@/types";
import { updatedTransactionInterface } from "@/types";

export async function createTransaction(transaction: Transaction) {

  try {
    await conn();

    const newTransaction = await transactionModel.create(transaction);

    return newTransaction;
  } catch (error) {
    console.log(error);   
  }
}

export async function updateTransaction(transactionId: string, transaction: updatedTransactionInterface) {
  try {
    await conn();

    const updatedTransaction = await transactionModel.findByIdAndUpdate(transactionId, transaction, { new: true });

    return updatedTransaction;
  } catch (error) {
    console.log(error);  
  }
}

export async function deleteTransaction(transactionId: string) {
  try {
    await conn();

    const deletedTransaction = await transactionModel.findByIdAndDelete(transactionId);

    return deletedTransaction;
  } catch (error) {
    console.log(error);  
  }
}

export async function getTransactions(clerkId: string) {
  try {
    await conn();

    const transactions = await transactionModel.find({ clerkId });

    return transactions;
  } catch (error) {
    console.log(error);  
  }
}
