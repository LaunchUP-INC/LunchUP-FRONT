import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h5 className={`${styles.boldHeader}`}>Sobre Nosotros</h5>
            <p>Somos una empresa dedicada a mejorar la alimentación escolar.</p>
          </Col>
          <Col md={4}>
            <h5 className={`${styles.boldHeader}`}>Contacto</h5>
            <p>Email: lunchup.pf@gmail.com</p>
            <p>Teléfono: +123 456 7890</p>
          </Col>
          <Col md={4}>
            <h5 className={`${styles.boldHeader}`}>Síguenos</h5>
            <a href="https://github.com/LaunchUP-INC" className={styles.socialIcon}><i className="fab fa-github"></i></a>
            <a href="https://facebook.com" className={styles.socialIcon}><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" className={styles.socialIcon}><i className="fab fa-instagram"></i></a>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p>&copy; 2024 LunchUP. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
