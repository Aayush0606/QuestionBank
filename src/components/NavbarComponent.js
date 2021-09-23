import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            StackOverflow Prototype
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink eventKey={1} as={Link} to="/fun">
                Your Questions
              </NavLink>
              <NavLink eventKey={2} as={Link} to="/about">
                About Me
              </NavLink>
            </Nav>
            <Nav>
              <NavLink eventKey={3} as={Link} to="/login">
                Login
              </NavLink>
              <NavLink eventKey={4} as={Link} to="/signup">
                SignUp
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
