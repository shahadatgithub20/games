
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Dashboard from './component/DashBoard/Dashboard';
import AdminPanel from './component/AdminPanel/AdminPanel';
import DashBoardHome from './component/DashBoard/DashBoardHome';
import User from './component/User/User';
import Profile from './component/UserCortroll/Profile';
import LogIn from './component/Security/LogIn/LogIn';
import Register from './component/Security/Registation/Register';
import PaymentList from './component/AdminControll/PaymentList';
import WithdrawRequest from './component/AdminControll/WithdrawRequest';
import WithdrawList from './component/AdminControll/WithdrawList';
import AccountHistory from './component/UserCortroll/AccountHistory';
import Complen from './component/UserCortroll/Complen';
import ComplenList from './component/AdminControll/ComplenList';
import TeenPatti from './component/Games/Games-01/TeenPatti';
import Start from './component/Games/Start/Start';
// ========================


function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Header />
              <Routes>
                <Route path="/Header" element={<Header/>} />
                <Route path="/*" element={<Navigate to ="/Home"/>} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Dashboard/*" element={<Dashboard />} />
                <Route path="/AdminPanel" element={<AdminPanel />} />
                <Route path="/ComplenList " element={<ComplenList  />} />
                <Route  path="DashBoardHome" element={<DashBoardHome/>}/> 
                <Route path="/User" element={<User />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/AccountHistory" element={<AccountHistory/>} />
                <Route path="/Register" element={<Register />} />
                <Route path="/PaymentList" element={<PaymentList />} />
                <Route path="/WithdrawRequest" element={<WithdrawRequest />} />
                <Route path="/WithdrawList" element={<WithdrawList />} />
                <Route path="/TeenPatti" element={<TeenPatti />} />
                <Route path="/Start" element={<Start/>} />
                <Route path="/Complen" element={<Complen />} />
                <Route path="/Footer" element={<Footer />} />
              </Routes>
          
      </BrowserRouter>
     
    </div>
  );
}

export default App;
