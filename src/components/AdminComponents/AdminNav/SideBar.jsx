import { faBasketShopping, faChartLine, faTableColumns, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              <FontAwesomeIcon icon={faTableColumns} /> Dashboard
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/admin/products">
            <Nav.Link className=" text-white" onClick={toggle}>
              <FontAwesomeIcon icon={faBasketShopping} /> Productos
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/admin/users">
            <Nav.Link className=" text-white" onClick={toggle}>
              <FontAwesomeIcon icon={faUsers} /> Usuarios
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/admin/stats">
            <Nav.Link className=" text-white" onClick={toggle}>
              <FontAwesomeIcon icon={faChartLine}/> Estadisticas
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Sidebar;
