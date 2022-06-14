import '../index.css'
import {Container, Nav, Navbar} from 'react-bootstrap'

function Header() {
  return (
    <div>
        <Navbar bg="white" variant="light">
            <Container className="my-3">
                <Navbar.Brand href="#home">Developer CV Builder</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Create your CV</Nav.Link>
                    <Nav.Link href="#pricing">About us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header