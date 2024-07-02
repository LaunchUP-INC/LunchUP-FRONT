// eslint-disable-next-line react/prop-types
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";


const Card = ({ id, name, image, price }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleOnClick = () =>{
    dispatch(getProductDetail(id));
    navigate(`/products/detail/${id}`);
  }

  return (
    <div onClick={handleOnClick} className={styles.container}>
      <h3 className={styles.title}>{name}</h3>

      <img src={image}   className={styles.image}/>     

      <p className={styles.price}>$ {price}</p>
    </div>
  );
};

export default Card;