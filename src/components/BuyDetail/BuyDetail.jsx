import styles from "./BuyDetail.module.css";
import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import Modal from "react-modal";
import RatingModal from "../RatingModal/RatingModal";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateRating } from "../../redux/actions"; // Asegúrate de tener esta acción en tus acciones de redux

const BuyDetail = () => {
  const { orderId } = useParams();
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const [order, setOrder] = useState(null);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (orders && orders.length > 0) {
      const foundOrder = orders.find((o) => o.id === orderId);
      setOrder(foundOrder);
    }
  }, [orders, orderId]);

  useEffect(() => {
    if (selectedItem) {
      setScore(selectedItem.rating || 0);
    }
  }, [selectedItem]);

  const handleId = (id) => {
    const child = JSON.parse(localStorage.getItem("selectedChild"));
    console.log(child);
    console.log(id);
    if (child.id === id) {
      return `${child.firstname} ${child.lastname}`;
    }
  };

  const handleClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleRatingSubmit = () => {
    dispatch(updateRating(orderId, selectedItem.id, score));
    setSelectedItem(null);
    setScore(0);
    setShowModal(false);
  };
  if (!order) {
    return <div>Cargando detalles de la compra...</div>;
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
            <th>Comensal</th>
            <th>Calificar</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>${item.unit_price}</td>
              <td>{handleId(order.ChildId)}</td>
              <td>
                <Button variant="primary" onClick={() => handleClick(item)}>
                  Calificar
                </Button>
              </td>
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
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <div>
            <Button
              variant="danger"
              onClick={() => setShowModal(false)}
              className={styles.closeButton}
            >
              X
            </Button>
            <h2>Calificar</h2>
            <p>
              Dinos que te pareció el plato:{" "}
              {selectedItem && selectedItem.title}
            </p>
            <RatingModal rating={score} setRating={setScore} />
            <Button variant="primary" onClick={handleRatingSubmit}>
              Calificar
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default BuyDetail;
