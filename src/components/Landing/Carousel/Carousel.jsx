import React from 'react';
import { Container, Row, Col, Carousel, Badge } from 'react-bootstrap';
import styles from './Carousel.module.css';

const FunctionCarousel = () => {
  return (
    <Container id="howItWorks" className={`text-center ${styles.howItWorksContainer}`}>
      <Row className="justify-content-center">
        <Col xs={12} className="mb-4">
          <h2>
            <Badge pill bg="success">¿Cómo funciona?</Badge>
          </h2>
        </Col>
        <Col xs={12} md={8}>
          <Carousel data-bs-theme="dark"interval={1000} className={styles.carouselCustom}
           >
            <Carousel.Item >
              <img
                className="d-block w-100"
                src="/concept.png"
                alt="Paso 1"
              />
              <Carousel.Caption>
                <h5>Paso 1: Ingresá tus datos y los de tu hijo.</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/concept3.png"
                alt="Paso 2"
              />
              <Carousel.Caption>
                <h5>Paso 2: Elegí el menú que más te guste.</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/concept5.png"
                alt="Paso 3"
              />
              <Carousel.Caption>
                <h5>Paso 3: Recarga el saldo y paga de manera segura.</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default FunctionCarousel;
