import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <Nav className={`bg-light sidebar ${isOpen ? 'open' : ''}`} activeKey="/admin">
            <div className="sidebar-sticky"></div>
            <div>

            
            <Nav.Item>
                <LinkContainer to="/admin">
                    <Nav.Link onClick={toggle}>Dashboard</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/admin/products">
                    <Nav.Link onClick={toggle}>Productos</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/admin/product/create">
                    <Nav.Link onClick={toggle}>Usuarios</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/admin/stats">
                    <Nav.Link onClick={toggle}>Estadisticas</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            </div>
        </Nav>
    );
};

export default Sidebar;