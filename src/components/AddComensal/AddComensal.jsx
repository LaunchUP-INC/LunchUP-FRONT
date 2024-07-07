/* eslint-disable react/prop-types */
import Modal from "react-modal";
import styles from "./AddComensal.module.css";
Modal.setAppElement("#root");

const AddComensalModal = ({
  modalIsOpen,
  closeModal,
  childrens,
  handleAddChild,
  handleChildChange,
  errors,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Añadir Comensal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2>Añadir Comensal</h2>
      {childrens.map((child, index) => (
        <div key={index} className={styles.childContainer}>
          <span>Nombre del Hijo/a</span>

          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder="Nombre del hijo/a"
            value={child.name || ""}
            onChange={(event) => handleChildChange(index, event)}
          />
          <span className={styles.error}>{errors && errors.childName}</span>
          <span>Edad del Hijo/a</span>
          <input
            type="number"
            name="age"
            className={styles.input}
            placeholder="Edad del hijo/a"
            value={child.age || ""}
            onChange={(event) => handleChildChange(index, event)}
          />
          <span className={styles.error}>{errors && errors.childAge}</span>
          <span>Escuela</span>
          <input
            type="text"
            name="school"
            className={styles.input}
            placeholder="Escuela"
            value={child.school || ""}
            onChange={(event) => handleChildChange(index, event)}
          />
          <span className={styles.error}>{errors && errors.childSchool}</span>

          <span>Grado/Año</span>
          <input
            type="number"
            name="grade"
            className={styles.input}
            placeholder="Grado o Año"
            value={child.grade || ""}
            onChange={(event) => handleChildChange(index, event)}
          />
          <span className={styles.error}>{errors && errors.childGrade}</span>
        </div>
      ))}
      <button onClick={handleAddChild} className={styles.btn}>
        Añadir Comensal
      </button>
      <button onClick={closeModal} className={styles.btn}>
        Cerrar
      </button>
    </Modal>
  );
};

export default AddComensalModal;
