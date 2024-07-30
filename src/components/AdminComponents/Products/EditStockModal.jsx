import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateStock } from "../../../redux/actions";
import Swal from "sweetalert2";

const EditStockModal = ({ show, handleClose, product }) => {
  const [newStock, setNewStock] = useState(product.quantity);
  const dispatch = useDispatch();

  
  const handleSave = async () => {
    const item = await dispatch(updateStock(product.id, newStock));
    
    if (item) {
      Swal.fire({
        icon: "success",
        title: "Stock actualizado",
        text: `Ahora hay ${item} en stock`,
      })
      handleClose();
    }else{
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error",
      })
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Stock de {product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formStock">
            <Form.Label>Stock (Agrege la cantidad a sumar)</Form.Label>
            <Form.Control
              type="number"
              value={newStock}
              onChange={(e) => setNewStock(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditStockModal;