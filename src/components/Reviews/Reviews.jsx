import styles from "./Reviews.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchReviews, fetchUsers } from "../../redux/actions";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Reviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const users = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(fetchReviews());
    dispatch(fetchUsers());
  }, [dispatch]);

  const compare = () => {
    const usersReview = [];
    users.forEach((user) => {
      reviews.forEach((review) => {
        if (review.UserId === user.id) {
          usersReview.push({
            id: review.id,
            Name: user.firstname,
            LastName: user.lastname,
            comment: review.comment,
            score: review.score,
          });
        }
      });
    });
    return usersReview;
  };

  const usersReviews = compare();
  console.log("users", users);
  console.log(reviews);
  console.log(usersReviews);

  return (
    <div>
      {usersReviews.length > 0 ? (
        <Carousel interval={5000} controls={false} indicators={false}>
          {usersReviews.map((userReview) => (
            <Carousel.Item key={userReview.id}>
              <div className={styles.page}>
                <div className={styles.margin}></div>
                <h2>
                  {userReview.Name} {userReview.LastName}
                </h2>
                <p>{userReview.comment}</p>
                <p>Score: {userReview.score}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>No hay reviews</p>
      )}
    </div>
  );
};

export default Reviews;
