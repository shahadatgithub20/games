import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Firebase/FirebaseHook/useAuth';

const Register = () => {
    const{error,handelRegisterSubmit,handelNameField,handleNumberField,handelEmailField,handelPasswordField,handelRePasswordField}=useAuth();


    return (
        <div>
            <h1>Welcome Onboard !</h1>           
            <p>Let's help you meet up your task</p>
            <form onSubmit={handelRegisterSubmit}>
                    <input onBlur={handelNameField} type="text" placeholder='Enter your full Name' required />
                    <br/>
                    <br/>
                    <input onBlur={handleNumberField} type="number" placeholder='Enter your Phone number' />
                    <br/>
                    <br/>
                    <input onBlur={handelEmailField} type="email" placeholder='Enter your Email' required />
                    <br/>
                    <br/>
                    <input onBlur={handelPasswordField} type="password" placeholder='Enter Password' required />
                    <br/>
                    <br/>
                    <input  type="submit" value="Register" />
                    <br/>
                    <h4>Already have an Account ?  | <NavLink to="/LogIn"> LogIn </NavLink></h4>
                    <span>{error}</span>
                </form>
        </div>
        
    );
   
  
};


export default Register;