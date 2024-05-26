import { createTransaction, updateTransaction, deleteTransaction, getTransactions } from "@/utils/actions/transaction.actions"
import React, { useState } from "react";

const Transactions: React.FC = () => {
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const handleSubmit = (e: React.SyntheticEvent) => {
        const target = e.target as typeof e.target & {
            category: { value: string },
            amount : { value: number }
        }
        const category = target.category.value;
        const amount = target.amount.value;

        const transaction = {
            category,
            amount
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <select name='category' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
            </select>
            <input
                name="amount"
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}>
            </input>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default Transactions;
