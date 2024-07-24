import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import comedorEscolar from "./image/comedorescolar.jpg";
import LandingHeader from "../LandingHeader/LandingHeader";
import AboutSection from "./AboutSection";
import FunctionCarousel from "./Carousel/Carousel";
import TypingEffect from "../TypingEffect"; // Importa el nuevo componente
import styles from "./Landing.module.css";
import BlinkingCursor from "../BlinkingCursor";
import ReviewCarrusel from "../ReviewCarrusel/ReviewCarrusel";
import Footer from './Footer/Footer'; // Importa el nuevo componente Footer

const LandingPage = () => {
  const dynamicText = [
    "alimentación escolar saludable.",
    "supervición efectiva.",
    "vida más sana.",
  ];

  return (
    <>
      <div className={`container-fluid p-0 ${styles.curvedBg}`}>
        <LandingHeader />

        <Container
          fluid
          className="p-0"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row
            className="align-items-center d-flex justify-content-center"
            style={{ minHeight: "100vh", maxWidth: "90vw" }}
          >
            <Col md={6} className="p-5 d-flex flex-column align-items-start">
              <h1 className="mb-5">
                La solución perfecta para una{" "}
                <TypingEffect
                  strings={dynamicText}
                  typeSpeed={100} // Velocidad de escritura
                  backSpeed={50} // Velocidad de borrado
                  delay={2000} // Delay antes de borrar
                />
                <BlinkingCursor />
              </h1>
              <p className="lead" style={{ fontSize: "1.4rem" }}>
                Nuestra app está diseñada para transformar la experiencia de las
                cantinas escolares, haciendo que la elección de comidas
                nutritivas y deliciosas sea más fácil y accesible para todos.
              </p>
              <Button
                as="a"
                href="/home"
                variant="success"
                size="lg"
                className={`mt-3 ${styles.startButton}`}
                style={{ position: "relative", zIndex: 2 }}
              >
                <i className="fas fa-play mr-2"></i> Comenzar
              </Button>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={comedorEscolar}
                alt="Niños comiendo en la escuela"
                className="img-thumbnail d-flex justify-content-center "
                style={{ height: "500px", width: "650px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <AboutSection />
      </div>

      <FunctionCarousel />

      <div className={styles.reviews}>
        <ReviewCarrusel />
      </div>

      <Footer /> {/* Añadir el componente Footer */}
    </>
  );
};

export default LandingPage;
