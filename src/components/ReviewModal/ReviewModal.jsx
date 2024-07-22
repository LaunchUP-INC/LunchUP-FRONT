import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './ReviewModal.module.css'; // Importa tus estilos
import RatingModal from '../RatingModal/RatingModal';
import { useDispatch } from 'react-redux';
import { postReviews } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ReviewModal = ({ isOpen, onRequestClose, userId }) => {
  const [comment, setComment] = useState('');
  const [score, setScore] = useState(0);
  const dispatch = useDispatch();
  const review = {comment, score};
  /* const {id } = userId; */
  console.log(userId);
const { user } = useAuth0();
  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(postReviews(review));
    /* localStorage.setItem('hasReviewed', 'true'); // Marcar como reseñado */
    onRequestClose(); // Cierra el modal después de enviar la reseña
  };
  // const id = user.name;
  console.log(review);
  const handleTextChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Review Modal"
    >
      <h2>Deja tu Reseña</h2>
      <form onSubmit={handleSubmit}>
        <h3>Puntua con una calificación de 1 a 5.
          Cuentanos como fue tu experienca con nuestra plataforma. </h3>
        <RatingModal rating={score} setRating={setScore} />
        <textarea
          className={styles.textarea}
          placeholder="Escribe tu reseña aquí..."
          value={comment}
          onChange={handleTextChange}
          maxLength={300}
          minLength={20}
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>Enviar</button>
        <button type="button" onClick={onRequestClose} className={styles.closeButton}>Cerrar</button>
      </form>
    </Modal>
  );
};

export default ReviewModal;