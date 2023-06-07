
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink,Route,Routes,Navigate } from 'react-router-dom';
import React from 'react';

//componant
import Nav1 from './components/Nav1';


//page
import Home from './pages/Home';
import About from './pages/about';
import User from './pages/user';
import Dashbord from './pages/Dashboard';

//UseState
import { useState } from 'react';

function Nav(){
    const [loggidIn,SetLoggedIn] = useState(null)

  function handleLogin(){
    SetLoggedIn(true)
  }

  function handleLogout(){
    SetLoggedIn(false)
  }

  console.log(loggidIn)

  let activeClassName = "nav-active"
    return <>
    <div>
      <Nav1/>
    </div>
    <BrowserRouter>
      <header>
        <h1>
          hello router
        </h1>
      </header>
      <nav>
        <NavLink end to="/" className={({isActive}) => isActive ? activeClassName : undefined}>home</NavLink>
        <NavLink to="/about"className={({isActive}) => isActive ? activeClassName : undefined}>about</NavLink>
        <NavLink to="/user"className={({isActive}) => isActive ? activeClassName : undefined}>user</NavLink>
        <NavLink to="/dashboard"className={({isActive}) => isActive ? activeClassName : undefined}>Dashboard</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={ loggidIn ? <Navigate to="/dashboard"/>:<Home login={handleLogin}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/dashboard" element={loggidIn ? <Dashbord logout={handleLogout}/>:<Navigate to="/" state={"from dashboard"}/>} />
      </Routes>
      
      
      </BrowserRouter>
    </>
}

export default Nav
