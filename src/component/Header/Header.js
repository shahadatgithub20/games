import React from 'react';
import { Link } from 'react-router-dom';
// =======================


const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/Home">Home</Link>  {"|"}
                <Link to="/Footer">Footer</Link>  {"|"}
                <Link to="/Dashboard">Dashboard</Link>  {"|"}
                <Link to="/User">User</Link>  {"|"}
            </nav>
            <div className="">
            
                 
            </div>
        </div>
    );
};

export default Header;