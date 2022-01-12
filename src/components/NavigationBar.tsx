import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Read-News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/category/entertainment">Entertainment</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/sports">Sports</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/science">Science</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/technology">Technology</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/business">Business</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/health">Health</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
