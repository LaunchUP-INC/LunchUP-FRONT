import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import PersonIcon from "../Icons/PersonIcon";
import BenefitIcon from "../Icons/BenefitIcon";
import StoreIcon from "../Icons/StoreIcon";
import styles from './Landing.module.css';

const AboutSection = () => {
    return (
        <Container id="about" className={`text-center ${styles.about}`}>
            <Row className="align-items-center justify-content-center" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
                <Col xs={12} className="mb-4">
                    <h2>
                        ¿Qué es <Badge pill bg="success">LunchUP?</Badge>
                    </h2>
                    <p className={`mt-3 ${styles.justifiedText}`}>
                        Bienvenidos a LunchUP, la solución ideal para asegurar que tus hijos reciban sus alimentos de manera fácil y segura en sus colegios. Nuestra aplicación está diseñada para atender las necesidades de dos tipos de usuarios: los padres y las cantinas escolares.
                    </p>
                </Col>
                <Col md={5} className={`mb-5 ${styles.colCard}`} >
                    <Card className={styles.equalCard}>                      
                            <Card.Body className={styles.cardBodyPadding}>
                            <Card.Title><PersonIcon className={styles.icon} /> Para padres</Card.Title>
                            <Card.Text>
                                Como padre, tu principal preocupación es la alimentación de tus hijos durante el horario escolar. Con nuestra aplicación, puedes:
                                <ol>
                                    <li>Ordenar Comida: Elige y compra los alimentos de un menú variado y saludable ofrecido por la cantina de la escuela de tus hijos.</li>
                                    <li>Programar Entregas: Planifica y programa las entregas para toda la semana, asegurándote de que tus hijos tengan su comida lista y a tiempo todos los días.</li>
                                    <li>Seguir el Estado de la Orden: Recibe notificaciones en tiempo real sobre el estado de las órdenes, desde la preparación hasta la entrega.</li>
                                </ol>
                            </Card.Text>
                            <Card.Title><BenefitIcon className={styles.icon} /> Beneficios</Card.Title>
                            <Card.Text>
                                Seguridad y comodidad al saber que tus hijos están comiendo bien, sin tener que preocuparte por preparar y enviar comida diariamente.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} className={`mb-5 ${styles.colCard}`}>
                    <Card className={styles.equalCard}>
                        <Card.Body className={styles.cardBodyPadding}>
                            <Card.Title><StoreIcon className={styles.icon} /> Para Cantinas Escolares</Card.Title>
                            <Card.Text>
                                Las cantinas escolares juegan un papel crucial en nuestra aplicación. Al registrarse en nuestra plataforma, las cantinas pueden:
                                <ol>
                                    <li>Gestionar el Menú: Publica y actualiza tu menú fácilmente, asegurando que los padres vean las opciones disponibles en todo momento.</li>
                                    <li>Recibir y Procesar Órdenes: Maneja las órdenes de los padres de manera eficiente con nuestras herramientas de gestión de pedidos.</li>
                                    <li>Promocionar Productos: Destaca productos nuevos o promociones especiales para atraer más ventas.</li>
                                </ol>
                            </Card.Text>
                            <Card.Title><BenefitIcon className={styles.icon} /> Beneficios</Card.Title>
                            <Card.Text>
                                Aumenta tu alcance y tus ventas al integrarte con una plataforma que conecta directamente con los padres de los estudiantes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
}

export default AboutSection;
