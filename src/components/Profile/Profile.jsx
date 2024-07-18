import styles from "./Profile.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Loader from "../Loader/Loader";
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import ReviewAlert from "../ReviewAlert/ReviewAlert";
const Profile = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    const [show, setShow] = useState(false);
    const handleClosed = () => setShow(false);
    const handleShow = () => setShow(true);
    const [comensal, setComensal] = useState({
        nombre: "",
        apellido: "",
        curso: "",
        escuela: "",
    });
    const navigate = useNavigate();
    console.log(comensal);
    const handleChange = (event) => {
        setComensal({
            ...comensal,
            [event.target.name]: event.target.value,
        });
    };

    if (isLoading) {
        return <Loader />;
    }

    const handleShowModal = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        isAuthenticated && (
            <div className={styles.container}>
                <Card style={{ width: '15rem' }} bg="secondary" border="dark">
                    <Image src={user.picture} alt={user.name} roundedCircle />
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            {user.email}.
                        </Card.Text>
                    </Card.Body>
                    <Button variant="success" onClick={handleShow} className={styles.btn}>
                        Agregar comensal
                    </Button>
                </Card>
                <div>

                    <Modal show={show} onHide={handleClose} animation={true}>
                        <Modal.Header closeButton closeVariant="dark">
                            <Modal.Title>Nuevo Comensal</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nombre y Apellido</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Pepito Honguito"
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Curso</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="1"
                                        min={1}
                                        max={6}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nombre de la escuela</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Escuela"

                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClosed}>
                                Cancelar
                            </Button>
                            <Button variant="success" onClick={handleClose}>
                                Añadir
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre completo</th>
                                <th>Curso</th>
                                <th>Escuela</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark Zuckerberg</td>
                                <td>6 A</td>
                                <td>Escuela Ejemplo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Elon Musk</td>
                                <td>5 B</td>
                                <td>Escuela Ejemplo</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td >Bill Gates</td>
                                <td>4 C</td>
                                <td>Escuela Ejemplo</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className={styles.btnContainer}>
                    <Button variant="info" className={styles.btn} onClick={() => navigate("/profile/edit")}>Editar Perfil</Button>
                    <Button variant="danger" onClick={() => logout()} className={styles.btn}>Cerrar sesión</Button>
                    <Button variant="primary" onClick={() => navigate("/admin")} className={styles.btn}>Mis publicaciones</Button>
                </div>
                <ReviewAlert />
            </div>
        )
    );
};

export default Profile;
