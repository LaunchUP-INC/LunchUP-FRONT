import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { getChild, selectChild } from "../../redux/actions";
import { toast } from "react-toastify";

const WhichChild = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const children = useSelector((state) => state.children);
  const [selectedChild, setSelectedChild] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    dispatch(getChild());
  }, [dispatch]);

  const handleConfirm = () => {
    if (selectedChild) {
      const child = children?.find((child) => child.id === selectedChild);
      if (child) {
        localStorage.setItem("selectedChild", JSON.stringify(child));
      }
      dispatch(selectChild(selectedChild));
      setIsConfirmed(true); // Marca como confirmado
      handleClose();
    }
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      // Usa handleCancel para el botón de cerrar
    >
      <Modal.Header>
        <Modal.Title>A cual comensal quieres comprarle?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {children.map((child) => (
          <div
            key={child.id}
            style={{
              border: "1px solid #ccc",
              display: "flex",
              alignItems: "center", // Changed to center for better alignment
              padding: "10px",
              justifyContent: "space-between",
              height: "50px",
              backgroundColor:
                selectedChild === child.id ? "#e0f7fa" : "transparent", // Highlight selected child
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
          >
            <p style={{ margin: 0 }}>
              {child.firstname} {child.lastname}
            </p>
            <Form.Check
              type="radio"
              name="selectedChild"
              style={{ marginRight: "20px", transform: "scale(1.5)" }} // Increased size for better visibility
              id={`check-${child.id}`}
              onChange={() => setSelectedChild(child.id)}
              checked={selectedChild === child.id}
            />
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleConfirm}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WhichChild;
