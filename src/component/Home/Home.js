import { Grid } from '@mui/material';
import React from 'react';
import "./home.css"
import LogIn from '../Security/LogIn/LogIn';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import DashBoardHome from '../DashBoard/DashBoardHome';


const Home = () => {
    return (
        <div >
            
            <div className="" >
                <Grid container spacing={2}>
                    <Grid  item xs={12} md={12}>
                        <div className="Home-section-2 main">
                            <Header/>
                            <LogIn></LogIn>
                        </div>
                    </Grid>
                    <Grid  item xs={12} md={12}>
                        <div className="">
                        <Footer></Footer>
                        </div>
                    </Grid>
                
                </Grid>
            </div>
            
        </div>
    );
};

export default Home;