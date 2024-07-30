import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import BagIcon from "../Icons/BagIcon";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import styles from "./LandingHeader.module.css";

const LandingHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const pathToHideNav = ["/", "/login", "/signup", "/admin", "/banned"];
  const shouldHideNav = pathToHideNav.includes(location.pathname);
  const { isAuthenticated } = useAuth0();
  const [isLoged, setIsLoged] = useState(false);

  console.log(isLoged);

  useEffect(() => {
    if (!isAuthenticated) {
      if (user) {
        setIsLoged(true);
      } else {
        setIsLoged(false);
      }
    }
  }, [isAuthenticated, user]);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrolled ? `${styles.scrolled}` : "bg-light"}
      style={{ transition: "background-color 0.5s" }}
    >
      <Container>
        <Navbar.Brand href="/" className={styles.navBrand}>
          LunchUP
          <BagIcon className={`${styles.icon} me-2`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="d-none d-lg-block">
              <NavDropdown
                className={`${styles.dropDown}`}
                title="Informacion"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="about"
                  smooth={true}
                  duration={500}
                >
                  Inicio
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="howItWorks"
                  smooth={true}
                  duration={500}
                >
                  De qué Trata
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="d-lg-none">
              <Nav.Link as={Link} to="about" smooth={true} duration={500}>
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="howItWorks"  smooth={true} duration={500}>
                De qué Trata
              </Nav.Link>
              {isAuthenticated || isLoged ? (
                <Nav.Link onClick={() => navigate("/profile")}>
                  Mi Perfil
                </Nav.Link>
              ) : (
                <Nav.Link onClick={() => navigate("/login")}>
                  Iniciar Sesión
                </Nav.Link>
              )}
            </div>
          </Nav>
          <div className="d-none d-lg-block">
            {isAuthenticated || isLoged ? (
              <Nav.Link
                onClick={() => navigate("/profile")}
                className={styles["nav-link"]}
              >
                Mi Perfil
              </Nav.Link>
            ) : (
              <Nav.Link
                onClick={() => navigate("/login")}
                className={styles["nav-link"]}
              >
                Iniciar Sesión
              </Nav.Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LandingHeader;
