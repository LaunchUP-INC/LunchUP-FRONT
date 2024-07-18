import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import BagIcon from '../../Icons/BagIcon';

const TopNavbar = ({ toggleSidebar }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ height: '70px' }}>
      <Button variant="dark" onClick={toggleSidebar} className="mr-2">
        ☰ Menu
      </Button>
      <Navbar.Brand href="../home"><BagIcon/> LunchUP </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="../profile">
            <Nav.Link className='me-3'>Volver a LunchUP</Nav.Link>
          </LinkContainer>
          <Nav.Link href="#logout" className='me-3'>Cerrar sesion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;