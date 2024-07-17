import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import BagIcon from "../Icons/BagIcon";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import styles from "./LandingHeader.module.css";

const LandingHeader = () => {
  const [scrolled, setScrolled] = useState(false);

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
          <Nav className="me-auto" >
            <NavDropdown className={styles.dropDown} title="Informacion" id="collapsible-nav-dropdown" >
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
                to="about"
                href="#"
                smooth={true}
                duration={500}
              >
                De qué Trata
              </NavDropdown.Item>
              <NavDropdown.Item href="/login">Ingresar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LandingHeader;
