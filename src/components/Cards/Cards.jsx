import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions";
import Card from "../Card/Card";

const Cards = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.filteredProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <main>
      <div>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Card
                id={product.id}
                title={product.title}
                image={product.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Cards;
