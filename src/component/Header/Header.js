import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/FirebaseHook/useAuth';

// =======================


const Header = () => {
    const {user, signIngUseIngGoogle,logOut}=useAuth();
    return (
        <div>
            <nav> 
                {/* <Link to="/Dashboard">Dashboard</Link>  {"|"} */}
                {
                    user.email && <Box>
                        <Link to="/Home">Home</Link>  {"|"}
                        <Link to="/Footer">Footer</Link>  {"|"}
                         <Link to="/Dashboard">Dashboard</Link>  {"|"}

                    </Box>
                    
                }
            </nav>
            
        </div>
    );
};

export default Header;