import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReviews, fetchUsers } from "../../redux/actions";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Reviews.module.css";

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

  const groupReviews = (reviews, groupSize) => {
    const groupedReviews = [];
    for (let i = 0; i < reviews.length; i += groupSize) {
      groupedReviews.push(reviews.slice(i, i + groupSize));
    }
    return groupedReviews;
  };

  const usersReviews = compare();
  const groupedReviews = groupReviews(usersReviews, 3);

  const generateBackgroundStyle = (index) => {
    const colors = ["#f5f5f0", "#f0e68c", "#e6e6fa", "#f0fff0", "#ffe4e1"];
    const baseColor = colors[index % colors.length];
    return {
      backgroundImage: `linear-gradient(${baseColor} 1.1rem, #ccc 1.2rem)`,
    };
  };

  return (
    <div>
      {groupedReviews.length > 0 ? (
        <Carousel
          interval={5000}
          controls={false}
          indicators={true}
          variant="dark"
        >
          {groupedReviews.map((group, index) => (
            <Carousel.Item key={index}>
              <div className={styles.group}>
                {group.map((userReview, reviewIndex) => (
                  <div
                    key={userReview.id}
                    className={styles.page}
                    style={generateBackgroundStyle(index * 3 + reviewIndex)}
                  >
                    <div className={styles.margin}></div>
                    <h2 className={styles.title}>{userReview.Name}</h2>
                    <h2> {userReview.LastName}</h2>
                    <p>{userReview.comment}</p>
                    <p>Score: {userReview.score}</p>
                  </div>
                ))}
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
