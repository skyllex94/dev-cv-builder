import "../index.css";
import React, { useState } from "react";
import { Container, Nav, Navbar, Badge, Form } from "react-bootstrap";
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

          <Nav className="nav-links ms-auto align-content-center">
            <Link to="/" className="px-2">
              Home
            </Link>

            <p className="px-2 template-change" onClick={showTemplates}>
              Change Template
            </p>

            <Link to="/about" className="ps-2 pe-4">
              About
            </Link>
            {username ? (
              <React.Fragment>
                <div className="verticalLine" />
                <Form.Label
                  to="#pricing"
                  className="px-2"
                  style={{ textDecoration: "none" }}
                >
                  {capitalize(username)}
                </Form.Label>

                <Link className="px-2" to="/" onClick={() => logOut()}>
                  <Badge className="badge" bg="dark">
                    Log out
                  </Badge>
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
                  <Badge className="badge" bg="dark">
                    Login
                  </Badge>
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
