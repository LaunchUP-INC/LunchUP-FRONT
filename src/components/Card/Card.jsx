// eslint-disable-next-line react/prop-types
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ id, title, image }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () =>{
    dispatch(getProductDetail(id));
    navigate(`/products/detail/${id}`);
  }

  return (
    <div onClick={handleOnClick} className={styles.container}>
      <label className={styles.label}>ID: {id}</label>
      <h3 className={styles.title}>{title}</h3>
      <img src={image} alt={title}  className={styles.image}/>
    </div>
  );
};

export default Card;
