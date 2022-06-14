import '../index.css'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar bg="white" variant="light">
            <Container fluid className="m-4">
                <Navbar.Brand href="#home">Developer CV Builder</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="#features">Create your CV</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="#pricing">About us</NavLink></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header