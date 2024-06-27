import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions";
import Card from "../Card/Card";
import style from "..//Cards/Cards.module.css";
const Cards = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.filteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log("Filtered Products:", filteredProducts); // Verificar los datos en el estado

  return (
      <div className={style.container}>
          {filteredProducts &&
            filteredProducts.map((product) => (
                <Card
                  id={product.id}
                  title={product.title}
                  image={product.image}
                />
            ))}
      </div>
  );
};

export default Cards;
