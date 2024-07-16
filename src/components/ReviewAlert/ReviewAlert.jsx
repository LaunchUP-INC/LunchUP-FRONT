import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ReviewModal from '../ReviewModal/ReviewModal';

const ReviewAlert = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('hasReviewed') !== 'true') {
      const reviewRequestInterval = setInterval(() => {
        Swal.fire({
          title: '¿Te gustaría dejarnos una reseña?',
          text: 'Tu opinión es muy importante para nosotros.',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Sí, claro',
          cancelButtonText: 'No, gracias',
        }).then((result) => {
          if (result.isConfirmed) {
            setIsModalOpen(true);
          }
        });
      }, 10000); // 10 minutos

      return () => clearInterval(reviewRequestInterval);
    }
  }, []);

  return (
    <>
      <ReviewModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ReviewAlert;