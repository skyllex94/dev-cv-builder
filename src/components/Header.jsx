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
                    <NavLink to="/" className="px-2">Home</NavLink>
                    <NavLink to="#features" className="px-2">Create your CV</NavLink>
                    <NavLink to="#pricing" className="px-2">About us</NavLink>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header