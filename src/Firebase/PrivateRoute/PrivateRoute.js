import React from 'react';
import { Navigate, } from 'react-router-dom';


import useAuth from '../FirebaseHook/useAuth';

const PrivateRoute = ({children,}) => {
  console.log(children);
 

  const {user}=useAuth();
  console.log(user.email);
    return (  user.email ? children : <Navigate to ="/LogIn"></Navigate>)

       
    
};

export default PrivateRoute;