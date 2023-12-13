import React from 'react'
import '../css/Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
   <>
   <div className='navbar-area'>
   <Navbar expand="lg" >
    <Container>
        <Navbar.Brand href="#home" id='logo'>Smokey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
              <Link id="link-url" to="/">HOME</Link>
              </Nav.Link>
            <Nav.Link href="#link">
              <Link id="link-url" to="/Service">SERVICE</Link>
              </Nav.Link>
            <Nav.Link href="#link">
              <Link id="link-url" to="/About">ABOUT </Link>
              </Nav.Link>
            <Nav.Link href="#link">
              <Link id="link-url" to="/Contact">CONTACT</Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
   </div>
   
   </>
  )
}
