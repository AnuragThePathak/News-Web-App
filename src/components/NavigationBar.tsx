import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Read-News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/category/entertainment">Entertainment</NavDropdown.Item>
                <NavDropdown.Item href="/category/sports">Sports</NavDropdown.Item>
                <NavDropdown.Item href="/category/science">Science</NavDropdown.Item>
                <NavDropdown.Item href="/category/technology">Technology</NavDropdown.Item>
                <NavDropdown.Item href="/category/business">Business</NavDropdown.Item>
                <NavDropdown.Item href="/category/health">Health</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
