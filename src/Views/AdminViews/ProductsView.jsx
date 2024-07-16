import { useSelector } from "react-redux";
import Products from "../../components/AdminComponents/Products/Products";
import Card from "../../components/Card/Card";

const ProductsView = () =>{
    const allProducts = useSelector((state) => state.allProducts);

    return(
        <>
            <Products products={allProducts} />
        </>
    )

}

export default ProductsView;