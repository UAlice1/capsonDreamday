import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './assets/pages/Layout';
import Signin from './assets/pages/Authentication/Signin';
import SignUp from './assets/pages/Authentication/SignUp'
import Home from './pages/Home';
import Available from './assets/pages/Available'
import Auth from './assets/pages/Authentication/Signin';
import Service from './assets/pages/Service';

import Contact from './assets/pages/Contact';
import About from './assets/pages/About';
import Bookings from './assets/pages/Bookings';
import Gallery from './Components/Gallery';
//DashBoards
import DasboardLayout from './Components/shared/DasboardLayout';
import Dashboard from './pages/DashBoardPage/Dashboard';
import BookingDash from './pages/DashBoardPage/BookingDash';
import RecentHalls from './Components/RecentHall';
import Halls from './pages/DashBoardPage/Halls.jsx'




function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Gallery />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Service" element={<Service />} />
         
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Available" element={<Available />} />
          <Route path="/Bookings" element={<Bookings />} />
        </Route>
        <Route path="/" element={<DasboardLayout/>}>
        <Route path='/BookingDash' element={<BookingDash/>} />
        <Route path='/RecentHall' element={<RecentHalls />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Halls' element={<Halls />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
   
  );
}

export default App;

