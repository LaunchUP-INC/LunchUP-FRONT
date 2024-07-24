import styles from "./BuyDetail.module.css";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import Modal from "react-modal";
import RatingModal from "../RatingModal/RatingModal";

const BuyDetail = () => {
    const [rating, setRating] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const handleClick = (value) => {
        setRating(value);
        setShowModal(true);
    }
    return (
        <div className={styles.buydetail}>
            <h1 className={styles.title}>Productos comprados</h1>

            <Table striped bordered hover className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Plato</th>
                        <th>Precio</th>
                        <th>Calificar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Plato 1</td>
                        <td>$100</td>
                        <td><Button variant="primary" onClick={() => handleClick(1)}>Calificar</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Plato 2</td>
                        <td>$200</td>
                        <td><Button variant="primary" onClick={() => handleClick(2)}>Calificar</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Plato 3</td>
                        <td>$300</td>
                        <td><Button variant="primary" onClick={() => handleClick(3)}>Calificar</Button></td>
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
                        <RatingModal rating={rating} setRating={setRating} />
                        <Button variant="primary" onClick={() => setShowModal(false)}>Calificar</Button>
                    </div>
                </Modal>
            </div>
        </div>

    )
}

export default BuyDetail;