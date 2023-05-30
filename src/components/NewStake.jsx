import React, { useState } from 'react';
import { ethers } from 'ethers';
import "./NewStake.css"

function StakeForm({ account, contract }) {
    const [amount, setAmount] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Convert amount to the appropriate data type (e.g., BigNumber)
            // const parsedAmount = ethers.utils.parseEther(amount);

            // Call the contract function with the parsed amount
            await contract.stake(amount)

            // Clear the form input
            setAmount('');
        } catch (error) {
            console.error('Error calling :', error);
        }
    };

    return (
        <form className="my-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button type="submit">Stake Tokens</button>
        </form>
    );
}

export default StakeForm;
