// eslint-disable-next-line react/prop-types
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { addToShoppingCart } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";
import Rating from "../Rating/Rating";
import { useState } from "react";

const Card = (props) => {
  const { id, name, images, price } = props;
  // console.log(props);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  // console.log(id)
  const handleOnClick = () => {
    dispatch(getProductDetail(id));
    navigate(`/products/detail/${id}`);
  }

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToShoppingCart(props));
  }
  const handleTouch = () => {
    setIsActive(!isActive);
  };
  return (
    <div 
      className={`${styles.card} ${isActive ? styles.active : ""}`} 
      onTouchStart={handleTouch}
      onClick={handleOnClick}
    >
      <img src={images[0]} alt={name} className={styles.cardImage} />
      <Rating />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{name}</p>
        <p className={styles.cardDescription}>$ {price}</p>
        <button className={styles.cardButton} onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default Card;