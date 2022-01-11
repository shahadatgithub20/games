import { Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./start.css"
const Start = () => {
    return (
        <div className="MainContent">
            <h1>Start Games component</h1>
            <Grid className="GamesItemsMain"  container spacing={0.5}>
                <Grid  className="" item xs={12} md={3} >
                    <NavLink to="/TeenPatti">
                        <div className="GamesItems" >
                            <h1>Games=01</h1>
                        </div>
                    </NavLink>
                    
                </Grid>
                <Grid  className="" item xs={12} md={3}>
                    <NavLink to="/TeenPatti">
                        <div className="GamesItems">
                            <h1>Games=02</h1>
                        </div>
                    </NavLink>
                       
                </Grid>
                <Grid  className="" item xs={12} md={3}>
                    <NavLink to="/TeenPatti">
                         <div className="GamesItems">
                            <h1>Games=03</h1>
                        </div>
                    </NavLink>
                        
                </Grid>
                <Grid  className="" item xs={12} md={3}>
                    <NavLink to="/TeenPatti">
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