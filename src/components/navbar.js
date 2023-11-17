import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function AppNavbar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Etusivu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Audi</Nav.Link>
            <Nav.Link href="#features">BMW</Nav.Link>
            <Nav.Link href="#pricing">Mercedes Benz</Nav.Link>
          </Nav>
        </Container>
        <Container className="audi-logo">LOGO</Container>
        <Container className="bmw-logo">LOGO</Container>
        <Container className="mb-logo">LOGO</Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;