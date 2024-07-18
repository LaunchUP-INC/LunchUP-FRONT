import { useDispatch } from "react-redux";
import { getProductDetail, addToShoppingCart } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";
import Rating from "../Rating/Rating";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Card = (props) => {
  const { id, name, images, price } = props;
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleOnClick = () => {
    dispatch(getProductDetail(id));
    navigate(`/products/detail/${id}`);
  };
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (isAuthenticated === true) {
      dispatch(addToShoppingCart(props));
    } else {
      alert("Por favor, inicia sesión para comprar.");
    }
  };

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
        <button
          className={styles.cardButton}
          onClick={handleAddToCart}
          disabled={isAuthenticated ? true : false}
        >
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
        {!isAuthenticated && <p className={styles.loginPrompt}>Please log in to purchase</p>}
      </div>
    </div>
  );
};

export default Card;