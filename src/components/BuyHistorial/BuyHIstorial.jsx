import Modal from "react-modal";
import styles from "./BuyHistorial.module.css";
import { Table, Button } from "react-bootstrap";
import { useState } from "react";
import RatingModal from "../RatingModal/RatingModal";
import { FaWindowClose } from "react-icons/fa";
const BuyHistorial = () => {
const [rating, setRating] = useState(0);
const [showModal, setShowModal] = useState(false);
const handleClick = (value) => {
    setRating(value);
    setShowModal(true);
}
    return (
        <div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fecha</th>
                        <th>Monto</th>
                        <th>Producto</th>
                        <th>Calificar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>    
                        <td>1</td>
                        <td>01/01/2023</td>
                        <td>$500</td>
                        <td>Hamburguesa</td>
                        <td><Button variant="primary" onClick={handleClick}>Calificar</Button></td>
                    </tr>
                </tbody>
            </Table>
            
            <div>
                <Modal
                    isOpen={showModal}
                    onRequestClose={() => setShowModal(false)}
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                        },
                    }}
                    >
                    <div>
                        <Button variant="danger" onClick={() => setShowModal(false)} className={styles.closeButton}>X </Button>
                        <h2>Calificar</h2>
                        <p>Dinos que te parecio el plato</p>
                        <RatingModal rating={rating} setRating={setRating}/>
                        <Button variant="primary" onClick={() => setShowModal(false)}>Calificar</Button>
                    </div>
                </Modal>
            </div>
        </div>
    )


}

export default BuyHistorial;