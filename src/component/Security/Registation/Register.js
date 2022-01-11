import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>Welcome Onboard !</h1>           
            <p>Let's help you meet up your task</p>
            <form action="">
                    <input type="text" placeholder='Enter your full Name' required />
                    <br/>
                    <br/>
                    <input type="number" placeholder='Enter your Phone number' />
                    <br/>
                    <br/>
                    <input type="email" placeholder='Enter your Email' required />
                    <br/>
                    <br/>
                    <input type="password" placeholder='Enter Password' required />
                    <br/>
                    <br/>
                    <input type="password" placeholder='Confirm Password' required />
                    <br/>
                    <br/>
                    <input type="submit" value="Register" />
                    <br/>
                    <h4>Already have an Account ?  | <NavLink to="/LogIn"> LogIn </NavLink></h4>
                </form>
        </div>
    );
};

export default Register;