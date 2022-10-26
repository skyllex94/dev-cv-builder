import "../index.css";
import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import { getAuth } from "firebase/auth";
import ModalTemplates from "./InputModals/ModalTemplates";

function Header({ username }) {
  const auth = getAuth();

  const logOut = () => {
    auth.signOut();
    window.localStorage.removeItem("UserData");
  };

  const [modalTemplates, setModalTemplates] = useState(false);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const showTemplates = () => {
    if (username) {
      setModalTemplates((prev) => !prev);
    } else {
      toast.warning("Please Log-in or Register to access more templates.");
    }
  };

  return (
    <div>
      <Navbar bg="white" variant="light">
        <Container fluid className="m-4 nav-style">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>Developer CV Builder</Navbar.Brand>
          </NavLink>

          <Nav className="nav-links ms-auto">
            <Link to="/" className="px-2">
              Home
            </Link>

            <a className="px-2" onClick={showTemplates}>
              Change Template
            </a>

            <Link to="/about" className="ps-2 pe-4">
              About
            </Link>
            {username ? (
              <React.Fragment>
                <div className="verticalLine"></div>
                <Link
                  to="#pricing"
                  className="px-2"
                  style={{ textDecoration: "none" }}
                >
                  {capitalize(username)}
                </Link>

                <Link className="px-2" to="/" onClick={() => logOut()}>
                  <Button className="badge">Log out</Button>
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="verticalLine" />
                <Link
                  to="/signin"
                  className="px-2"
                  style={{ textDecoration: "none" }}
                >
                  <Button className="badge">Login</Button>
                </Link>
              </React.Fragment>
            )}
          </Nav>
          <ModalTemplates
            show={modalTemplates}
            onHide={() => setModalTemplates(false)}
          />
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
