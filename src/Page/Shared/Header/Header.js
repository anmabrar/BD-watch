import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
    </Nav>
   
    <Nav className="d-flex align-items-center">
    {user.email &&
       <NavDropdown title={user.displayName} id="collasible-nav-dropdown">
       <NavDropdown.Item as={NavLink} to="/myOrders/3.1">My Order</NavDropdown.Item>
       <NavDropdown.Item as={NavLink} to="/addReview/3.2">Add Review</NavDropdown.Item>
       <NavDropdown.Item as={NavLink} to="/manageOrders/3.3">Manage Order</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item as={NavLink} to="/addProduct/3.4">Add Package</NavDropdown.Item>
     </NavDropdown>
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