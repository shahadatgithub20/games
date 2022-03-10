import { Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Firebase/FirebaseHook/useAuth';
import "./start.css"
const Start = () => {
    const {user, signIngUseIngGoogle,logOut}=useAuth();
    
    const AddGamesOneUser=()=>{
        const name=user.displayName;
        const email=user.email;
        const content={user:name, email:email};

        // ==============================
        // send data in Database
        
        //==============================
        fetch('http://localhost:5000/gamesOneUser',{
            method:'POST',
            headers:{
            'content-type': 'application/json' 
            },
        
            body:JSON.stringify(content)
            
        })
        .then()
        // ==============================
    }
    return (
       
        <div className="MainContent">
            <h1>Start Games component</h1>
           
            <Grid className="GamesItemsMain"  container spacing={0.5}>
                <Grid  className="" item xs={12} md={3} >
                    <NavLink to="/TeenPatti" className="NavLink"  >
                        <div onClick={AddGamesOneUser} className="GamesItems"  >
                            <h1>Games=01</h1>
                        </div>
                    </NavLink>
                    
                </Grid>
                <Grid  className="" item xs={12} md={3}>
                    <NavLink to="/TeenPatti" className="NavLink" >
                        <div className="GamesItems">
                            <h1>Games=02</h1>
                        </div>
                    </NavLink>
                       
                </Grid>
                <Grid  className="" item xs={12} md={3}>
                    <NavLink to="/TeenPatti" className="NavLink" >
                         <div className="GamesItems" >
                            <h1>Games=03</h1>
                        </div>
                    </NavLink>
                        
                </Grid>
                <Grid  className="" item xs={12} md={3}>
                    <NavLink to="/TeenPatti" className="NavLink" >
                        <div className="GamesItems">
                            <h1>Games=04</h1>
                        </div>
                    </NavLink>
                        
                </Grid>
            </Grid>
           
        </div>
    );
};

export default Start;