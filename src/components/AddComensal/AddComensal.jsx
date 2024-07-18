import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AddComensalModal = ({
  modalIsOpen,
  closeModal,
  childrens,
  handleAddChild,
  handleChildChange,
  errors,
  setFormData,
  savedComensalsCount,
  setSavedComensalsCount,
}) => {
  const handleSave = () => {
    // Validar cada hijo antes de guardar
    if (
      errors.childName ||
      errors.childAge ||
      errors.childSchool ||
      errors.childGrade
    ) {
      alert("Por favor, corrija los errores antes de guardar.");
      return;
    }

    // Actualizar el estado formData del padre con los cambios de los hijos
    setFormData((prevFormData) => ({
      ...prevFormData,
      children: [...childrens],
    }));

    // Incrementar el contador de comensales guardados
    setSavedComensalsCount(savedComensalsCount + 1);

    // Cerrar el modal después de guardar
    closeModal();
  };

  return (
    <Modal show={modalIsOpen} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Añadir Comensal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {childrens.map((child, index) => (
          <div key={index} className="mb-3">
            <Form.Group controlId={`child-${index}`}>
              <Form.Label>Nombre del Hijo/a</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre del hijo/a"
                value={child.name || ""}
                onChange={(event) => handleChildChange(index, event)}
                isInvalid={!!errors.childName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.childName}
              </Form.Control.Feedback>

              <Form.Label>Edad del Hijo/a</Form.Label>
              <Form.Control
                type="number"
                name="age"
                placeholder="Edad del hijo/a"
                value={child.age || ""}
                onChange={(event) => handleChildChange(index, event)}
                isInvalid={!!errors.childAge}
              />
              <Form.Control.Feedback type="invalid">
                {errors.childAge}
              </Form.Control.Feedback>

              <Form.Label>Escuela</Form.Label>
              <Form.Control
                type="text"
                name="school"
                placeholder="Escuela"
                value={child.school || ""}
                onChange={(event) => handleChildChange(index, event)}
                isInvalid={!!errors.childSchool}
              />
              <Form.Control.Feedback type="invalid">
                {errors.childSchool}
              </Form.Control.Feedback>

              <Form.Label>Grado/Año</Form.Label>
              <Form.Control
                type="number"
                name="grade"
                placeholder="Grado o Año"
                value={child.grade || ""}
                onChange={(event) => handleChildChange(index, event)}
                isInvalid={!!errors.childGrade}
              />
              <Form.Control.Feedback type="invalid">
                {errors.childGrade}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        ))}
        <div>
          <strong>Comensales guardados:</strong> {savedComensalsCount}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          Guardar
        </Button>
        <Button variant="secondary" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddComensalModal;
