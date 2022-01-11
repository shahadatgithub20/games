import { Grid } from '@mui/material';
import React from 'react';
import "./home.css"
import LogIn from '../Security/LogIn/LogIn';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import DashBoardHome from '../DashBoard/DashBoardHome';


const Home = () => {
    return (
        <div>
            <Header/>
            <div >
                <Grid container spacing={2}>
                    <Grid className="Home-section-1" item xs={12} md={8}>
                        <DashBoardHome></DashBoardHome>
                    
                    </Grid>
                    <Grid className="" item xs={12} md={4}>
                        <div className="Home-section-2">
                            <LogIn></LogIn>
                        </div>
                    </Grid>
                
                </Grid>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;