import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Firebase/FirebaseHook/useAuth';

const LogIn = () => {
    const {user, signIngUseIngGoogle,logOut}=useAuth();
    return (
        <div>
            <h1>Welcome Back !</h1>
                <h2>{user.displayName}</h2>
                <form action="">
                    <input type="email" placeholder='Enter your Email' required />
                    <br/>
                    <br/>
                    <input type="password" placeholder='Enter your Password' required />
                    <br/>
                    <h3>Forget Password</h3>
                    <br/>
                    <input type="submit" value="Login" />
                    <br/>
                    <br/>
                    <h4>Don't have an Account ?  |  <NavLink to="/Register">Sign Up</NavLink> </h4>
                    <br/>
                    <button onClick={signIngUseIngGoogle}>signIngUseIngGoogle</button>
                    <br/>
                    <button onClick={logOut}>logOut</button>
                </form>
            
        </div>
    );
};

export default LogIn;