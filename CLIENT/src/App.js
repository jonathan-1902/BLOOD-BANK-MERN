
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import HomePage from './pages/Organization/HomePage';
import Donar from './pages/Organization/Donar';
import Admin from './pages/Admin/Admin';
import Organization from './pages/Organization';
import Analytics from './pages/Organization/Analytics';
import About from './pages/Admin/About';
import Hospital from './pages/Organization/Hospital';
import AdminOrg from './pages/Admin/AdminOrg';
import AdminDonar from './pages/Admin/AdminDonar';
import AdminHosp from './pages/Admin/AdminHosp';
import DonarEdit from './pages/Admin/DonarEdit';
import OrgEdit from './pages/Admin/OrgEdit';
import HospEdit from './pages/Admin/HospEdit';


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/inventory' element={<HomePage />}></Route>
        <Route path='/donar' element={<Donar />}></Route>
        {/* <Route path='/' element={<Login />}></Route> */}
        <Route path='/adminorg' element={<AdminOrg />}></Route>
        <Route path='/admindonar' element={<AdminDonar />}></Route>
        <Route path='/adminhospital' element={<AdminHosp />}></Route>
        {/* <Route path='/admin' element={<Admin />}></Route> */}
        <Route path='/organization' element={<Organization />}></Route>
        <Route path='/analytics' element={<Analytics />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/hospital' element={<Hospital />}></Route>
        <Route path='/donaredit' element={<DonarEdit />}></Route>
        <Route path='/orgedit' element={<OrgEdit />}></Route>
        <Route path='/hospedit' element={<HospEdit />}></Route>



      </Routes>
    </>
  );
}

export default App;
