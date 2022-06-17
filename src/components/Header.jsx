import "../index.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
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
              className="px-2"
              style={{ textDecoration: "none" }}
            >
              About us
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
