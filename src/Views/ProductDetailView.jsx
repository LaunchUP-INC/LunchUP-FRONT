import ProductDetail from "../components/ProductDetail/ProductDetail";
import { useSelector } from "react-redux";
import styles from "./viewsStyles/ProductDetailView.module.css";


const ProductDetailView = () => {
    const productDetail = useSelector(state => state.productDetail);

    return (

        <div className={styles.container}>
            <ProductDetail product={productDetail} />
        </div>
    )

}

export default ProductDetailView;