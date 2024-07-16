import React from 'react';
import Modal from 'react-modal';
import styles from './ReviewModal.module.css'; // Importa tus estilos
import RatingModal from '../RatingModal/RatingModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

const ReviewModal = ({ isOpen, onRequestClose }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const review = { reviewText, rating };
  console.log(review);
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío de la reseña y la puntuación

    console.log('Review:', reviewText, 'Rating:', rating);
    localStorage.setItem('hasReviewed', 'true'); // Marcar como reseñado
    onRequestClose(); // Cierra el modal después de enviar la reseña
  };
  const handleTextChange = (event) => {
    setReviewText(event.target.value);
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
        <RatingModal rating={rating} setRating={setRating} />
        <textarea
          className={styles.textarea}
          placeholder="Escribe tu reseña aquí..."
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