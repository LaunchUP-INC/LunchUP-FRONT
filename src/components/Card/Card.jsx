// eslint-disable-next-line react/prop-types
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { addToShoppingCart } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";


const Card = (props) => {
  const { id, name, images, price } = props;
  // console.log(props);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(id)
  const handleOnClick = () => {
    dispatch(getProductDetail(id));
    navigate(`/products/detail/${id}`);
  }

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToShoppingCart(props));
  }

  return (
    <div onClick={handleOnClick} className={styles.container}>
      <h3 className={styles.title}>{name}</h3>

      <img src={images[0]} className={styles.image} />

      <div className={styles.priceBtn}>
        <p className={styles.price}>$ {price}</p>
        <button onClick={handleAddToCart}><FontAwesomeIcon icon={faCartPlus} /></button>
      </div>
    </div>
  );
};

export default Card;