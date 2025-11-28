import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navb() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Mercadona</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Conócenos</Nav.Link>
            <Nav.Link href="/supermercados">Supermercados</Nav.Link>
            <Nav.Link href="/trabaja">Trabaja con nosotros</Nav.Link>
            <Nav.Link href="/at_cliente">Atención al Cliente</Nav.Link>
            <NavDropdown title="Idioma" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Español</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Valenciá
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Catalá</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Galego
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;