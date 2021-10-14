import React, { useState } from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Auth } from "../config/firebase.config";

export default function NavbarComponent() {
  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("something messed up");
    }
    setLoading(false);
  };

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
              <NavLink eventKey={1} as={Link} to="/ques">
                Your Questions
              </NavLink>
              <NavLink eventKey={2} as={Link} to="/ask">
                Ask Question
              </NavLink>
              <NavLink eventKey={3} as={Link} to="/about">
                About Me
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                eventKey={4}
                as={Link}
                to="/login"
                onClick={handleLogOut}
                disabled={loading}
              >
                LogOut
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
