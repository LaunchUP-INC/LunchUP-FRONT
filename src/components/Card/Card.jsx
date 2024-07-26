import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, addToShoppingCart } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";
import Rating from "../Rating/Rating";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

const Card = (props) => {
  const { id, name, images, price, stock } = props;
  const { isAuthenticated } = useAuth0();
  let isAuth = isAuthenticated;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const user = useSelector((state) => state.user);

  const handleOnClick = () => {
    dispatch(getProductDetail(id));
    navigate(`/products/detail/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if ((isAuthenticated || user) && stock) {
      dispatch(addToShoppingCart(props));
    } else if(!stock){
      toast.error("No hay stock disponible de momento")
    }else{
      toast.error("Por favor, inicia sesión para comprar.");
    }
  };

  const handleTouch = () => {
    setIsActive(!isActive);
  };

  useEffect(()=>{
    setDisabled(!isAuth && !user || !stock);
  },[])

  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ""}`}
      onTouchStart={handleTouch}
      onClick={handleOnClick}
    >
      <img src={images[0]} alt={name} className={styles.cardImage} />
      <Rating dish={id} />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{name}</p>
        <p className={styles.cardDescription}>$ {price}</p>
        <button
          className={styles.cardButton}
          onClick={handleAddToCart}
          // disabled={disabled}
        >
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
        {!isAuthenticated && !user ? 
          <p className={styles.loginPrompt}>Inicie sesion para poder comprar</p> :
          <p>Disponibles: {stock ? stock : "Sin stock"}</p>
        }
      </div>
    </div>
  );
};

export default Card;