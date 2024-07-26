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
    } else {
      toast.error("Por favor, selecciona un comensal")
    }
  };

  const handleCancel = () => {   
    handleClose(); // Solo cierra el modal si se ha confirmado    
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleCancel} // Usa handleCancel para el botón de cerrar
    >
      <Modal.Header>
        <Modal.Title>A cual comensal quieres comprarle?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {children.map((child) => (
          <div
            key={child.id}
            style={{
              borderBottom: "1px solid #ccc",

              display: "flex",
              alignItems: "start",
              padding: "10px",
              justifyContent: "space-between",
              height: "50px",
            }}
          >
            <p>
              {child.firstname} {child.lastname}
            </p>
            <Form.Check
              type="radio"
              name="selectedChild"
              style={{ marginRight: "20px" }}
              id={`check-${child.id}`}
              onChange={() => setSelectedChild(child.id)}
            />
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleConfirm}>
          Confirmar
        </Button>
        <Button variant="outline-secondary" onClick={handleCancel}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WhichChild;
