import React, { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] =useState('');
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user ={email};
        fetch('https://fast-forest-95996.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        })
        e.preventDefault()
    }

    return (
        <div className="  ">
            <form className="MakeAdmin " onSubmit={handleAdminSubmit}>
            <h2>Make an Admin</h2>
            <div className="mb-3 position-relative">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email"  type="email" onBlur={handleOnBlur} className="form-control" />
             </div>
            <button className = " btn btn-primary">Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;