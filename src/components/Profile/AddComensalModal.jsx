import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddComensalModal = ({
  show,
  handleClose,
  handleChange,
  handleAddComensal,
  comensal,
}) => {
  return (
    <Modal show={show} onHide={handleClose} animation={true}>
      <Modal.Header closeButton closeVariant="dark">
        <Modal.Title>Nuevo Comensal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="comensalName">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={comensal.nombre}
              onChange={handleChange}
              placeholder="Pepito Honguito"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="comensalCourse">
            <Form.Label>Curso</Form.Label>
            <Form.Control
              type="number"
              name="curso"
              value={comensal.curso}
              onChange={handleChange}
              placeholder="1"
              min={1}
              max={6}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="comensalSchool">
            <Form.Label>Nombre de la escuela</Form.Label>
            <Form.Control
              type="text"
              name="escuela"
              value={comensal.escuela}
              onChange={handleChange}
              placeholder="Escuela"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="success" onClick={handleAddComensal}>
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddComensalModal;
