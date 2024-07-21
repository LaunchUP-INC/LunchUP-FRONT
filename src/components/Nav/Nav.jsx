import { useNavigate, useLocation, useAsyncError } from "react-router-dom";
import BagIcon from "../Icons/BagIcon";
import styles from "./Nav.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { useState, useEffect } from "react";

const NavigationBar = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const pathToHideNav = ["/", "/login", "/signup", "/admin"];
  const shouldHideNav = pathToHideNav.includes(location.pathname);
  const { isAuthenticated } = useAuth0();
  const [isLoged, setIsLoged] = useState(false);
  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      // const userId = localStorage.getItem("userId");
      if (user) {
        setIsLoged(true);
      } else {
        setIsLoged(false);
      }
    }
  }, [isAuthenticated, user]);

  return shouldHideNav ? null : (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
          className={styles["navbar-brand"]}
        >
          LunchUP <BagIcon className={`ms-2 ${styles["navbar-icon"]}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => navigate("/home")}
              className={styles["nav-link"]}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/shopping")}
              className={styles["nav-link"]}
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className={`me-1 ${styles["navbar-icon"]}`}
              />
              {shoppingCart.length > 0 && (
                <Badge bg="secondary" className={styles["navbar-badge"]}>
                  {shoppingCart.length}
                </Badge>
              )}
            </Nav.Link>
            {isAuthenticated ||
              isLoged ? (
                <Nav.Link
                  onClick={() => navigate("/profile")}
                  className={styles["nav-link"]}
                >
                  Mi Perfil
                </Nav.Link>
              ):(
              <Nav.Link
                onClick={() => navigate("/login")}
                className={styles["nav-link"]}
              >
                Iniciar Sesión
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
