import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';

const Header = () => {
  const { user , logOut} = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={NavLink} to="/home" className="fs-4 text-warning fw-bold">BD Watch</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/allProducts">Explore</Nav.Link>
      {user.email &&
      <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>}
     </Nav>
   
    <Nav className="d-flex align-items-center">
    {user.email &&
    
    <h6 className="text-light mx-3">{user.displayName}</h6>
     }
   {user.email ? (
                <button className="btn btn-primary my-1" onClick={logOut}>
                  Logout
                </button>
            ) : (
                <Nav.Link as={NavLink} to="/login">
                  <button className="btn btn-primary " >
                    Login
                  </button>
                </Nav.Link>
            )}  
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;