import React, { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import ReviewModal from "../ReviewModal/ReviewModal";

const ReviewAlert = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const showReviewAlert = () => {
      Swal.fire({
        title: "¿Te gustaría dejarnos una reseña?",
        text: "Tu opinión es muy importante para nosotros.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí, claro",
        cancelButtonText: "No, gracias",
      }).then((result) => {
        if (result.isConfirmed) {
          setIsModalOpen(true);
        }
      });
    };

    if (localStorage.getItem("hasReviewed") !== "true") {
      showReviewAlert(); // Show the alert immediately once

      intervalRef.current = setInterval(() => {
        showReviewAlert();
      }, 600000); // 10 minutos = 600000 milisegundos
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <ReviewModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        user={user}
      />
    </>
  );
};

export default ReviewAlert;
