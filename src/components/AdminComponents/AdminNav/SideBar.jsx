import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Nav
      className={`bg-secondary sidebar ${isOpen ? "open" : ""}`}
      activeKey="/admin"
    >
      <div className="sidebar-sticky"></div>
      <div>
        <Nav.Item>
          <LinkContainer to="/admin">
            <Nav.Link className=" text-white" onClick={toggle}>
              Dashboard
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/admin/products">
            <Nav.Link className=" text-white" onClick={toggle}>
              Productos
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/admin/users">
            <Nav.Link className=" text-white" onClick={toggle}>
              Usuarios
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/admin/stats">
            <Nav.Link className=" text-white" onClick={toggle}>
              Estadisticas
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Sidebar;
