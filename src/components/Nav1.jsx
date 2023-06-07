import './Navcollor.css'
//bootstrap for nav
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter, NavLink,Route,Routes,Navigate } from 'react-router-dom';

function Nav1() {

  let activeClassName = "nav-active"

  return (
    <>
    <div>
    <BrowserRouter>
    <div>
        
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <NavLink end to="/" className={({ isActive})=> isActive ? activeClassName : undefined}>Home</NavLink>
                <NavLink to="about" className={({ isActive})=> isActive ? activeClassName : undefined}>about</NavLink>
                <NavLink to="User" className={({ isActive})=> isActive ? activeClassName : undefined}>User</NavLink>
              </Nav>
            </Container>
          </Navbar>
        </div>
          
    
           
    </BrowserRouter>
    </div>
    

      
      
    </>
  );
}

export default Nav1;