import React from 'react';
import { Accordion, Card, Button, Container, Row, Col } from 'react-bootstrap';
import PersonIcon from "../Icons/PersonIcon"; 
import BenefitIcon from "../Icons/BenefitIcon"; 
import StoreIcon from "../Icons/StoreIcon"; 
import styles from './Landing.module.css';

const AboutSection = () => {
    return (
        <Container id="about" className={styles.about}>
            <Row className="align-items-center" style={{ minHeight: '100vh' }}>
                <Col md={12}>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Header as={Button} variant="link" eventKey="0" className={styles['btn-link']}>
                                    ¿Qué es LunchUP?
                                </Accordion.Header>
                            </Card.Header>
                            <Accordion.Body eventKey="0">
                                <Card.Body>
                                    Bienvenidos a LunchUP, la solución ideal para asegurar que tus hijos reciban sus alimentos de manera fácil y segura en sus colegios. Nuestra aplicación está diseñada para atender las necesidades de dos tipos de usuarios: los padres y las cantinas escolares.
                                </Card.Body>
                            </Accordion.Body>
                        </Card>
                    </Accordion>
                    <Card className="mt-3">
                        <Card.Body>
                            <Card.Title><PersonIcon className={styles.icon} /> Para padres</Card.Title>
                            <Card.Text>
                                Como padre, tu principal preocupación es la alimentación de tus hijos durante el horario escolar. Con nuestra aplicación, puedes:
                                <ul>
                                    <li>Ordenar Comida: Elige y compra los alimentos de un menú variado y saludable ofrecido por la cantina de la escuela de tus hijos.</li>
                                    <li>Programar Entregas: Planifica y programa las entregas para toda la semana, asegurándote de que tus hijos tengan su comida lista y a tiempo todos los días.</li>
                                    <li>Seguir el Estado de la Orden: Recibe notificaciones en tiempo real sobre el estado de las órdenes, desde la preparación hasta la entrega.</li>
                                </ul>
                            </Card.Text>
                            <Card.Title><BenefitIcon className={styles.icon} /> Beneficios</Card.Title>
                            <Card.Text>
                                Seguridad y comodidad al saber que tus hijos están comiendo bien, sin tener que preocuparte por preparar y enviar comida diariamente.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3">
                        <Card.Body>
                            <Card.Title><StoreIcon className={styles.icon} /> Para Cantinas Escolares</Card.Title>
                            <Card.Text>
                                Las cantinas escolares juegan un papel crucial en nuestra aplicación. Al registrarse en nuestra plataforma, las cantinas pueden:
                                <ul>
                                    <li>Gestionar el Menú: Publica y actualiza tu menú fácilmente, asegurando que los padres vean las opciones disponibles en todo momento.</li>
                                    <li>Recibir y Procesar Órdenes: Maneja las órdenes de los padres de manera eficiente con nuestras herramientas de gestión de pedidos.</li>
                                    <li>Promocionar Productos: Destaca productos nuevos o promociones especiales para atraer más ventas.</li>
                                </ul>
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
