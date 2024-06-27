// eslint-disable-next-line react/prop-types
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, image }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () =>{
    dispatch(getProductDetail(id));
    navigate(`/products/detail/${id}`);
  }

  return (
    <div onClick={handleOnClick}>
      <label>ID: {id}</label>
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </div>
  );
};

export default Card;
