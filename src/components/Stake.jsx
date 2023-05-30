import React, { useEffect, useState } from 'react'
import "./Stake.css"

const Stake = ({ account, contract }) => {
    const [stakeHolder, setStakeHolders] = useState([[" 0xfabb0ac9d68b0b445fb7357272ff202c5651694a", 300], [" 0xe7f1725e7734ce288f8367e1bb143e90bb3f0512", 27] ,["1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71" , 63]])

    const updateStake = async () => {
        try {
            const data = await contract.stake(account);
            console.log(data.tostring());
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        updateStake();
    }, [stakeHolder])




    return (
        <div className='main'>
            <strong>StakeHolders:</strong>
            {stakeHolder.map((value, key) => (
                <div key={key} >
                    {/* <p>Address: {key}</p> */}
                    <p className='address' style={{ display: "inline-block" }}>Address:<strong>{value[0]}</strong> </p>
                    <p className='bal' style={{ display: "inline-block" }}>Balance:<strong>{value[1]}</strong> </p>
                </div>
            ))}
        </div>
    );


}

export default Stake