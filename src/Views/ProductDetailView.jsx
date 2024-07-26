import ProductDetail from "../components/ProductDetail/ProductDetail";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductDetail } from "../redux/actions";
import styles from "./viewsStyles/ProductDetailView.module.css";
import Loader from "../components/Loader/Loader";


const ProductDetailView = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.productDetail);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)

        dispatch(getProductDetail(id));

        setLoader(false);

      }, [dispatch, id]);

      const error = useSelector((state) => state.error);
        
        useEffect(() => {
            if (error) {
            toast.error(error);
            }
        }, [error]);

    return loader || productDetail.id != id ? <Loader /> : (

        <div className={styles.container}>
            <ProductDetail productDetail={productDetail}/>
        </div>
    )

}

export default ProductDetailView;