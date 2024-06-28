import PersonIcon from "../Icons/PersonIcon";
import BenefitIcon from "../Icons/BenefitIcon";
import StoreIcon from "../Icons/StoreIcon";
import styles from "./Landing.module.css";
import { useState } from "react";
import { Element } from "react-scroll";

const AboutSection = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <Element name="about" className={styles.aboutSection}>
      <button className={styles.accordion} onClick={handleShow}>
        ¿Que es LunchUP?
      </button>
      <div className={`${styles.containerSobre} ${show ? styles.open : ""}`}>
        <div className={styles.intro}>
          <p>
            Bienvenidos a LunchUP, la solución ideal para asegurar que tus hijos
            reciban sus alimentos de manera fácil y segura en sus colegios.
            Nuestra aplicación está diseñada para atender las necesidades de dos
            tipos de usuarios: los padres y las cantinas escolares.
          </p>
        </div>

        <div className={styles.containerAudience}>
          <div className={styles.audience}>
            <h3>
              {" "}
              <PersonIcon className={styles.icon} /> Para padres
            </h3>

            <p>
              Como padre, tu principal preocupación es la alimentación de tus
              hijos durante el horario escolar. Con nuestra aplicación, puedes:
            </p>

            <ul>
              <li>
                Ordenar Comida: Elige y compra los alimentos de un menú variado
                y saludable ofrecido por la cantina de la escuela de tus hijos.
              </li>
              <li>
                Programar Entregas: Planifica y programa las entregas para toda
                la semana, asegurándote de que tus hijos tengan su comida lista
                y a tiempo todos los días.
              </li>
              <li>
                Seguir el Estado de la Orden: Recibe notificaciones en tiempo
                real sobre el estado de las órdenes, desde la preparación hasta
                la entrega.
              </li>
            </ul>
            <h3>
              <BenefitIcon className={styles.icon} /> Beneficios
            </h3>
            <p>
              {" "}
              Seguridad y comodidad al saber que tus hijos están comiendo bien,
              sin tener que preocuparte por preparar y enviar comida
              diariamente.
            </p>
          </div>

          <div className={styles.audience}>
            <h3>
              {" "}
              <StoreIcon className={styles.icon} /> Para Cantinas Escolares
            </h3>
            <p>
              Las cantinas escolares juegan un papel crucial en nuestra
              aplicación. Al registrarse en nuestra plataforma, las cantinas
              pueden:
            </p>
            <ul>
              <li>
                Gestionar el Menú: Publica y actualiza tu menú fácilmente,
                asegurando que los padres vean las opciones disponibles en todo
                momento.
              </li>
              <li>
                Recibir y Procesar Órdenes: Maneja las órdenes de los padres de
                manera eficiente con nuestras herramientas de gestión de
                pedidos.
              </li>
              <li>
                Promocionar Productos: Destaca productos nuevos o promociones
                especiales para atraer más ventas.
              </li>
            </ul>
            <h3>
              <BenefitIcon className={styles.icon} /> Beneficios
            </h3>
            <p>
              {" "}
              Aumenta tu alcance y tus ventas al integrarte con una plataforma
              que conecta directamente con los padres de los estudiantes.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutSection;
