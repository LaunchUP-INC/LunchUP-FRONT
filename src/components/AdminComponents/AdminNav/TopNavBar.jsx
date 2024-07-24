import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import BagIcon from '../../Icons/BagIcon';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const TopNavbar = ({ toggleSidebar }) => {
  const { logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (isAuthenticated) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      logout();
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      navigate("/login"); // Navegar a la página de inicio de sesión
    }
    localStorage.removeItem("authType");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ height: '70px' }}>
      <Button variant="dark" onClick={toggleSidebar} className="mr-2">
        ☰ Menu
      </Button>
      <Navbar.Brand style={{backgroundColor: "#90ee90",color: "black"  ,border: "1px", borderRadius: "10px", padding: "5px"}} ><BagIcon/> LunchUP </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="../profile">
            <Nav.Link className='me-3'>Volver a LunchUP</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={handleLogout} className='me-3'>Cerrar sesion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;