import styles from "./Reviews.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchReviews } from "../../redux/actions";

const Reviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  console.log(reviews);

  return (
    <div className={styles.page}>
      <div className={styles.margin}></div>
      {reviews && reviews.length > 0 ? (
        reviews.map((review) => (
          <div className={styles.review} key={review.id}>
            <h2>{review.name}</h2>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>No hay reviews</p>
      )}
    </div>
  );
};

export default Reviews;
