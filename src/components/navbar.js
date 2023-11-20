import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppNavbar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Etusivu</Nav.Link>
          </Nav>
        </Container>
        <Container className="audi-logo">LOGO</Container>
        <Container className="bmw-logo">LOGO</Container>
        <Container className="mb-logo">LOGO</Container>

        <Container>
          <Nav className="cart">
            <Nav.Link href="#features">Ota yhteyttä</Nav.Link>
            <Nav.Link href="#home">Ostoskori</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
