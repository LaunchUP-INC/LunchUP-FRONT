import styles from "./BuyDetail.module.css";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import Modal from "react-modal";
import RatingModal from "../RatingModal/RatingModal";

const BuyDetail = ({ order }) => {
    const [rating, setRating] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (item) => {
        setSelectedItem(item);
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
                    {order.items.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>${item.unit_price}</td>
                            <td><Button variant="primary" onClick={() => handleClick(item)}>Calificar</Button></td>
                        </tr>
                    ))}
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
                        <Button variant="danger" onClick={() => setShowModal(false)} className={styles.closeButton}>X</Button>
                        <h2>Calificar</h2>
                        <p>Dinos que te pareció el plato: {selectedItem && selectedItem.title}</p>
                        <RatingModal rating={rating} setRating={setRating} />
                        <Button variant="primary" onClick={() => setShowModal(false)}>Calificar</Button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default BuyDetail;
