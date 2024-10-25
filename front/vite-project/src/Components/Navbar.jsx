import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/petLogo(1).png';
import { Link } from 'react-router-dom';

function NavbarPet() {
  return (
    <Navbar expand="lg" className="body-tertiary navbarPet">
      <Container fluid>
        <Navbar.Brand href="#"> <b>PET</b>SPA     <img src={logo} alt="logo" width='40' height='40' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/home' >Home</Nav.Link>
            <Nav.Link as={Link} to="/appointments">Mis Turnos</Nav.Link>
            <Nav.Link as={Link} to="#">Contact</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Peluqueria</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Baño
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex btnNavbar">
            <Button className='btnNB' as={Link} to='/' >Login</Button>
            <Button className='btnNB' as={Link} to='/register' >Register</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPet

