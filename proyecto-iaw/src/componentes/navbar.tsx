import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navb() {
  return (
    <Navbar className="o-navbar-fluid navbar-expand-lg fixed-top bg-light" expand="lg">
      <Container className='w-75'>
        <Navbar.Brand>
        <img
          src="/assets/logo_mercadona.png"
            height="120"
            alt="Mercadona"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Conócenos</Nav.Link>
            <Nav.Link href="/supermercados">Supermercados</Nav.Link>
            <Nav.Link href="/trabaja">Trabaja con nosotros</Nav.Link>
            <Nav.Link href="/at_cliente">Atención al Cliente</Nav.Link>
            <NavDropdown title="Idioma" id="basic-nav-dropdown" className='justify-content'>
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