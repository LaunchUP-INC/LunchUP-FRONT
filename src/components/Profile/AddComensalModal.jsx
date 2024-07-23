import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addComensal, fetchSchools } from "../../redux/actions"; // Asegúrate de importar tu acción

const AddComensalModal = ({ show, handleClose }) => {
  const [comensal, setComensal] = useState({
    firstname: "",
    lastname: "",
    gradeLevel: "",
    school: ""
  });

  const dispatch = useDispatch();
  const schools = useSelector((state) => state.schools);

  useEffect(() => {
    dispatch(fetchSchools()); // Asegúrate de que se obtengan las escuelas
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComensal({
      ...comensal,
      [name]: value
    });
  };

  const handleAddComensal = (e) => {
    e.preventDefault();
    dispatch(addComensal(comensal)); // Llama a la acción con el comensal como argumento
    handleClose(); // Cierra el modal después de añadir el comensal
  };

  return (
    <Modal show={show} onHide={handleClose} animation={true}>
      <Modal.Header closeButton closeVariant="dark">
        <Modal.Title>Nuevo Comensal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleAddComensal}>
          <Form.Group className="mb-3" controlId="comensalName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              value={comensal.firstname}
              onChange={handleChange}
              placeholder="Pepito"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="comensalLastname">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              value={comensal.lastname}
              onChange={handleChange}
              placeholder="Honguito"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="comensalCourse">
            <Form.Label>Curso</Form.Label>
            <Form.Control
              type="number"
              name="gradeLevel"
              value={comensal.gradeLevel}
              onChange={handleChange}
              placeholder="1"
              min={1}
              max={6}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="comensalSchool">
            <Form.Label>Nombre de la escuela</Form.Label>
            <Form.Select
              name="school"
              value={comensal.school}
              onChange={handleChange}
            >
              <option value="">Seleccionar escuela</option>
              {schools.map((school) => (
                <option key={school.id} value={school.name}>
                  {school.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="success" type="submit">
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddComensalModal;
