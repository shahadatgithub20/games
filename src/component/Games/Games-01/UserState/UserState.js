import { Grid } from '@mui/material';
import React from 'react';
import './userState.css'

const UserState = () => {
    return (
        <div>
            <h1>ALL USER LIST FOR SEEN ONLINE</h1>
            <Grid className="GamesItemsMain"  container spacing={0.5}>
            <Grid  className="" item xs={12} md={3} >
                        <div className="userState NavLink"  >
                            <h4>TOTAL USER</h4>
                            
                        </div>
                </Grid>

            </Grid>
            <div className="">==========================</div>
            <Grid className="GamesItemsMain"  container spacing={0.5}>
                <Grid  className="" item xs={12} md={3} >
                        <div className="userState NavLink"  >
                            <h4>Games Value = 500</h4>
                            <p>TOTAL USER</p>
                        </div>
                </Grid>
                <Grid  className="" item xs={12} md={3} >
                        <div className="userState NavLink"  >
                            <h4>Games Value = 2500</h4>
                        </div>
                </Grid>
                <Grid  className="" item xs={12} md={3} >
                        <div className="userState NavLink"  >
                            <h4>Games Value = 4000</h4>
                        </div>
                </Grid>
                <Grid  className="" item xs={12} md={3} >
                        <div className="userState NavLink"  >
                            <h4>Games Value = 10000</h4>
                            <p>TOTAL USER</p>
                        </div>
                </Grid>
                
                
              
            </Grid>

        </div>
    );
};

export default UserState;