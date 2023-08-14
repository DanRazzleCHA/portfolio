import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PiCodesandboxLogoDuotone} from 'react-icons/pi';
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = ()=> {
  const location = useLocation();
  return(
    <Navbar expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className='fw-semibold flex items-center'>
          
          <Link to="/" className='text-decoration-none text-light display-6 fw-lighter'> <PiCodesandboxLogoDuotone /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto p-2" activeKey={location.pathname}>
            <Nav.Link><Link to="/" className='text-decoration-none text-light'>Home</Link></Nav.Link>
            <Nav.Link><Link to="/work" className='text-decoration-none text-light'>Work</Link></Nav.Link>
            <Nav.Link><Link to="/education" className='text-decoration-none text-light'>Education</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

  )
}
export default NavbarComponent;