import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] =useState('');
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user ={email};
        fetch('http://localhost:5000/users/admin',{
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
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email"  type="email" onBlur={handleOnBlur} className="form-control" />
             </div>
            <button>Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;