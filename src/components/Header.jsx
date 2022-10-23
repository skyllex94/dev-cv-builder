import "../index.css";
import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { getAuth } from "firebase/auth";

function Header({ username }) {
  const auth = getAuth();

  const logOut = () => {
    auth.signOut();
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <Navbar bg="white" variant="light">
        <Container fluid className="m-4 nav-style">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>Developer CV Builder</Navbar.Brand>
          </NavLink>

          <Nav className="ms-auto">
            <NavLink to="/" className="px-2" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
            <NavLink
              to="#features"
              className="px-2"
              style={{ textDecoration: "none" }}
            >
              Create your CV
            </NavLink>
            <NavLink
              to="#pricing"
              className="ps-2 pe-4"
              style={{ textDecoration: "none" }}
            >
              About us
            </NavLink>
            {username ? (
              <React.Fragment>
                <div className="verticalLine"></div>
                <NavLink
                  to="#pricing"
                  className="px-2"
                  style={{ textDecoration: "none" }}
                >
                  {capitalize(username)}
                </NavLink>

                <Link className="px-2" to="/" onClick={() => logOut()}>
                  <Button className="badge">Log out</Button>
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="verticalLine"></div>
                <NavLink
                  to="/signin"
                  className="px-2"
                  style={{ textDecoration: "none" }}
                >
                  <Button className="badge">Login</Button>
                </NavLink>
              </React.Fragment>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
