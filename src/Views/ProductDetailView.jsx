import ProductDetail from "../components/ProductDetail/ProductDetail";
import { useSelector } from "react-redux";


const ProductDetailView = () => {
    const productDetail = useSelector(state => state.productDetail);

    return (

        <div>
            <ProductDetail product={productDetail} />
        </div>
    )

}

export default ProductDetailView;