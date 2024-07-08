import React from 'react';
import comedorEscolar from './image/comedorescolar.jpg';
import { Button, Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import LandingHeader from '../LandingHeader/LandingHeader';
import AboutSection from "./AboutSection";
import styles from './Landing.module.css'; // Asegúrate de que el path es correcto

const LandingPage = () => {
    return (
      <>
        <div className={`container-fluid p-0 ${styles.curvedBg}`}>

              <LandingHeader/>

              <Container fluid className="p-0">
                <Row className="align-items-center" style={{ minHeight: '100vh' }}>
                    <Col md={6} className="p-5">
                        <h1>La solución perfecta para una alimentación escolar saludable</h1>
                        <p className="lead">
                            Nuestra app está diseñada para transformar la experiencia de las cantinas escolares,
                            haciendo que la elección de comidas nutritivas y deliciosas sea más fácil y accesible para todos.
                        </p>
                        <Button as="a" href="/home" variant="success" size="lg" className={`mt-3 ${styles.startButton}`} style={{ position: 'relative', zIndex: 2 }}>
                            <i className="fas fa-play mr-2"></i> Comenzar
                        </Button>
                    </Col>
                    <Col md={6}>
                        <img src={comedorEscolar} alt="Niños comiendo en la escuela" className="img-thumbnail" />
                    </Col>
                </Row>
          </Container>

          </div>
          <div>
            <AboutSection/>
            </div>
          </>
    );
}

export default LandingPage;

