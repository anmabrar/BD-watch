import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation} from 'react-router';
import useAuth from '../../../Hook/useAuth';
import { Alert, Spinner } from 'react-bootstrap';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser, signInWithGoogle, loading } = useAuth();
  
    const location = useLocation();
    const history = useHistory();
  
    const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      console.log(newLoginData);
      setLoginData(newLoginData);
      
  }
  const handleLoginSubmit = e => {
    if(loginData.password !== loginData.password2){
        alert("Your password did not match !!");
        return;
    }
    registerUser(loginData.email, loginData.password,loginData.name, history);
      e.preventDefault();
  }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
             <div>
            <div className='container w-50 mt-5 pt-5'>
                <h1 className='fs-1 pb-5 text-center'>Register</h1>
                {!loading && <form onSubmit={handleLoginSubmit}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Your Name</label>
                        <input name="name" type="text" onBlur={handleOnBlur} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email" type="email" onBlur={handleOnBlur} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Your Password</label>
                        <input name="password"  type="password" onBlur={handleOnBlur} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Retype Your Password</label>
                        <input name="password2"  type="password" onBlur={handleOnBlur} className="form-control" />
                    </div>

                    <h6 className='fw-normal pb-3 pt-2'>Are you registered? <Link to='/login'>login Here</Link></h6>

                    <button type="submit" className="btn mt-2" style={{backgroundColor:'#9bb8b7'}}>Submit</button>

                    <br /> <br /> <span className='p-3'>or</span>
                </form>}
                {loading && <Spinner animation="border" /> }
                {/* {user?.email && 
                    <Alert key={'idx'} variant={'success'}>
                    This is a {'success'} alert—check it out!
                  </Alert>
                } */}
            

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

export default Register;