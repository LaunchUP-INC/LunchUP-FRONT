import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateStock } from "../../../redux/actions";

const EditStockModal = ({ show, handleClose, product }) => {
  const [newStock, setNewStock] = useState(product.quantity);
  const dispatch = useDispatch();

  console.log(product);
  const handleSave = async () => {
    const item = await dispatch(updateStock(product.id, newStock));
    
    console.log(item);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Stock for {product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formStock">
            <Form.Label>Stock</Form.Label>
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
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditStockModal;