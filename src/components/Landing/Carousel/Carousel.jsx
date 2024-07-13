import React, { useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import styles from "./Carousel.module.css";

const images = [
  {
    src: "/concept.png",
    caption: "Paso 1: Ingresá tus datos y los de tu hijo.",
  },
  {
    src: "/concept3.png",
    caption: "Paso 2: Elegí el menú que más te guste.",
  },
  {
    src: "/concept5.png",
    caption: "Paso 3: Recarga el saldo y paga de manera segura.",
  },
];

const FunctionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  return (
    <Container
      id="howItWorks"
      className={`text-center ${styles.howItWorksContainer}`}
    >
      <Row className="justify-content-center">
        <Col xs={12} className="mb-4">
          <h2>
            <Badge pill bg="success">
              ¿Cómo funciona?
            </Badge>
          </h2>
        </Col>
        <Col xs={12} md={8}>
          <div className={styles.carouselCustom}>
            <div className={styles.carouselItem}>
              <img
                src={images[currentIndex].src}
                alt={`Paso ${currentIndex + 1}`}
              />
              <div className={styles.carouselButtons}>
              <button onClick={handlePrev} className={styles.carouselButton}>
                ❮
              </button>
              <button onClick={handleNext} className={styles.carouselButton}>
                ❯
              </button>
            </div>
              <div className={styles.carouselCaption}>
                <h5>{images[currentIndex].caption}</h5>
              </div>
            </div>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FunctionCarousel;
