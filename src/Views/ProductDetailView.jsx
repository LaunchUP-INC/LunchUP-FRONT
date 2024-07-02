import ProductDetail from "../components/ProductDetail/ProductDetail";
import { useSelector } from "react-redux";
import styles from "./viewsStyles/ProductDetailView.module.css";


const ProductDetailView = () => {
    return (

        <div className={styles.container}>
            <ProductDetail/>
        </div>
    )

}

export default ProductDetailView;