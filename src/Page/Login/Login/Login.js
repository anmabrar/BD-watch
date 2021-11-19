import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hook/useAuth';
import { useForm } from 'react-hook-form';
import { Spinner } from 'react-bootstrap';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { reset, register, formState: { errors }, handleSubmit} = useForm();
  const { user, loginUser, signInWithGoogle, loading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field,value)
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
}
const handleLoginSubmit = e => {
    alert("Are you login ?")
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
}

const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
}

  return (
  <div>

    <div>
            <div className='container w-50 mt-5 pt-5'>
                <h1 className='fs-1 pb-5 text-center'>Login</h1>
                { !loading && <form onSubmit={handleLoginSubmit}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email"  type="email" onChange={handleOnChange} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name="password" type="password" onChange={handleOnChange} className="form-control" />
                    </div>

                    <h6 className='fw-normal pb-3 pt-2'>New user? <Link to='/register'>Register Here</Link></h6>

                    <button type="submit" className="btn mt-2" style={{backgroundColor:'#9bb8b7'}}>Submit</button>

                    <br /> <br /> <span className='p-3'>or</span>
                </form>}
                {loading && <Spinner animation="border" /> }
            </div>
    </div>

    <div className="mt-3">
      <button className=" btn btn-outline-secondary px-5" onClick={handleGoogleSignIn}>
      <img alt="" src="https://img.icons8.com/color/48/000000/google-logo.png"/>
        <span className="mx-3">Sign is google</span>
      </button>
    </div>

  </div>
  );
};

export default Login;