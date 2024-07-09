import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Badge } from 'react-bootstrap';
import styles from './Carousel.module.css';

const FunctionCarousel  = () => {
  
    return (
      <Container id="howItWorks" className={`text-center ${styles.howItWorksContainer}`}>
          <Row className="justify-content-center">
              <Col xs={12} className="mb-4">
                  <h2>
                   <Badge pill bg="success">¿Cómo funciona?</Badge>
                  </h2>
              </Col>
              <Col xs={12} md={8}>
                  <Carousel className={styles.carouselCustom}>
                      <Carousel.Item>
                          <div className={styles.carouselContent}>
                              <h4>Paso 1: Ingresá tus datos y los de tu hijo.</h4>
                              <img src="/concept.png" alt="Paso 1" className={styles.carouselImage} />
                          </div>
                      </Carousel.Item>
                      <Carousel.Item>
                          <div className={styles.carouselContent}>
                              <img src="/concept3.png" alt="Paso 2" className={styles.carouselImage} />
                              <h4>Paso 2: Elegí el menú que más te guste.</h4>
                          </div>
                      </Carousel.Item>
                      <Carousel.Item>
                          <div className={styles.carouselContent}>
                              <h4>Paso 3: Recarga el saldo y paga de manera segura.</h4>
                              <img src="/concept5.png" alt="Paso 3" className={styles.carouselImage} />
                          </div>
                      </Carousel.Item>
                  </Carousel>
              </Col>
          </Row>
      </Container>
  );
}

export default FunctionCarousel ;