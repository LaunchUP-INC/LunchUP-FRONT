import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Element } from 'react-scroll';
import styles from './Carousel.module.css';

const FunctionCarousel  = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
      setShow(!show);
    };
  
    return (
      <Element name="function" className={styles.containerAbout}>
        <div className={styles.containerSection}>
          <button onClick={handleShow} className={styles.accordion}>
            ¿Como funciona?
          </button>
          <div className={`${styles.containerSteps} ${show ? styles.open : ''}`}>
            {show && (
              <Carousel>
                <Carousel.Item interval={1000}>
                  <div className={styles.step}>
                    <h3>Paso 1: Ingresá tus datos y los de tu hijo.</h3>
                    <img src="/concept.png" alt="Paso 1" />
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <div className={styles.step}>
                    <img src="/concept3.png" alt="Paso 2" />
                    <h3>Paso 2: Elegí el menú que más te guste.</h3>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className={styles.step}>
                    <h3>Paso 3: Recarga el saldo y paga de manera segura.</h3>
                    <img src="/concept5.png" alt="Paso 3" />
                  </div>
                </Carousel.Item>
              </Carousel>
            )}
          </div>
        </div>
      </Element>
    );
}

export default FunctionCarousel ;