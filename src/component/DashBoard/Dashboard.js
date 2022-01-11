import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';

// -------------------
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
    useNavigate,
    BrowserRouter,
    Outlet
  } from "react-router-dom";
import DashBoardHome from './DashBoardHome';
import User from '../User/User';
import Profile from '../UserCortroll/Profile';
import AdminPanel from '../AdminPanel/AdminPanel';
import PaymentList from '../AdminControll/PaymentList';
import LogIn from '../Security/LogIn/LogIn';
import Register from '../Security/Registation/Register';
import WithdrawList from '../AdminControll/WithdrawList';
import WithdrawRequest from '../AdminControll/WithdrawRequest';
import TeenPatti from '../Games/Games-01/TeenPatti';
import AccountHistory from '../UserCortroll/AccountHistory';
import Complen from '../UserCortroll/Complen';
import ComplenList from '../AdminControll/ComplenList';
import Start from '../Games/Start/Start';
// ==================================

 
// ==================================

const drawerWidth = 200;

function Dashboard(props) {
    let { path, url } = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
          <div className="">
            <Link to="Profile"><Button  color="inherit">User Profile</Button></Link>
             <br/>
            <Link to="/Home"><Button  color="inherit">Home</Button></Link>
             <br/>
             <Link to="/Dashboard"><Button  color="inherit">Dashboard</Button></Link>
             <br/>
             <Link to="AdminPanel"><Button  color="inherit">AdminPanel</Button></Link>
             <br/>
             <Link to="ComplenList"><Button  color="inherit">User-Complen-List</Button></Link>
             <br/>
             <Link to="WithdrawRequest"><Button  color="inherit">WithdrawRequest</Button></Link>
             <br/>
             <Link to="WithdrawList"><Button  color="inherit">WithdrawList</Button></Link>
             <br/>
             <Link to="PaymentList"><Button  color="inherit">PaymentList</Button></Link>
             <br/>
             <Link to="Start"><Button  color="inherit">Start-Games</Button></Link>
             <br/>
             <Link to="AccountHistory"><Button  color="inherit">Account-History</Button></Link>
             <br/>
             <Link to="User"><Button  color="inherit">User Approve</Button></Link>
             <br/>
             <Link to="LogIn"><Button  color="inherit">LogIn</Button></Link>
             <br/>
             <Link to="Register"><Button  color="inherit">Register</Button></Link>
             <br/>
             <Link to="Complen"><Button  color="inherit">Complen</Button></Link>
             <br/>
             
            
          </div> 
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      
        {/* ======================Nesting Router======================= */}
           <Routes> 
                <Route exact path="/" element={<DashBoardHome/>}/>
                <Route path="AdminPanel" element={<AdminPanel />} />
                <Route  path="DashBoardHome" element={<DashBoardHome/>}/>
                <Route path="PaymentList" element={<PaymentList />} />
                <Route path="ComplenList" element={<ComplenList  />} />
                <Route path="WithdrawRequest" element={<WithdrawRequest />} />
                <Route path="WithdrawList" element={<WithdrawList />} />
                <Route path="User" element={<User />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="AccountHistory" element={<AccountHistory/>} />
                <Route path="LogIn" element={<LogIn />} />
                <Route path="Register" element={<Register />} />
                <Route path="TeenPatti" element={<TeenPatti />} />
                <Route path="Start" element={<Start/>} />
                <Route path="Complen" element={<Complen />} />
                         
           </Routes>
            {/* ======================================================= */}
      </Box>
          
    
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
