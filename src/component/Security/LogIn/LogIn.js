import React from 'react';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            <h1>Welcome Back !</h1>
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
                </form>
            
        </div>
    );
};

export default LogIn;