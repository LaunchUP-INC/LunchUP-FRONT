import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../../index.css"
import styles from "./ProductDetail.module.css";
import veganIcon from "../../utils/foodTypesIcons/vegan-icon.png";
import vegetarianIcon from "../../utils/foodTypesIcons/vegetarian-icon.png";
import glutenFreeIcon from "../../utils/foodTypesIcons/gluten-free.png";
import dairyFreeIcon from "../../utils/foodTypesIcons/dairy-free.png";
import conventionalIcon from "../../utils/foodTypesIcons/convencional-icon.png";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getProductDetail } from "../../redux/actions";




const ProductDetail = (params) => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const product = useSelector(state => state.productDetail);
    useEffect(() => {
        dispatch(getProductDetail(id));
    }, [dispatch, id]);
    console.log(product);
    /* const { name, image, price, description, Meal_Type, vegetarian, vegan, glutenFree, dairyFree, preparationTime, servings } = product; */
/*     const Meal_Type = product.Meal_Type.name; */
    return (
        <div className={styles.mainContainer}>

            {/* Seccion de imagenes del plato */}
            <div className={styles.dishInfo}>
                <div className={styles.imageContainer}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        className="mySwiper" >
                        <SwiperSlide >
                            <img src={product.image} alt={`${product.name}`} className={styles.dishImage} />
                        </SwiperSlide>
                    </Swiper>
                </div>


                {/* Seccion informativa del plato */}
                <div>
                    <h2 className={styles.mealName}>{product.name}</h2>{/* 
                    <h3>Tipo de plato</h3>
                    {Meal_Type === "conventional" ?
                    <div className={styles.mealTypeContainer}>
                        <img src={conventionalIcon} alt="conventional" className={styles.foodTypeIcon} />
                        <p>Convencional</p>
                    </div> :
                    vegetarian || vegan || glutenFree || dairyFree ?
                    <div className={styles.iconsContainer}>
                        {vegan ?
                            <div className={styles.mealTypeContainer}>
                                <img src={veganIcon} alt="vegan" className={styles.foodTypeIcon} />
                                <p>Vegano</p>
                            </div> : null}
                        {vegetarian ?
                            <div className={styles.mealTypeContainer}>
                                <img src={vegetarianIcon} alt="vegetarian" className={styles.foodTypeIcon} />
                                <p>Vegetariano</p>
                            </div> : null}
                        {glutenFree ?
                            <div className={styles.mealTypeContainer}>
                                <img src={glutenFreeIcon} alt="gluten-free" className={styles.foodTypeIcon} />
                                <p>Sin gluten</p>
                            </div> : null}
                        {dairyFree ?
                            <div className={styles.mealTypeContainer}>
                                <img src={dairyFreeIcon} alt="dairy-free" className={styles.foodTypeIcon} />
                                <p>Deslactozado</p>
                            </div> : null}
                    </div> : null
                    } 
 */}
{/*                     <h3>Tipo horario</h3>
                    <p>{product.Meal_Type.name}</p> */}

                    <h3>Precio</h3>
                    <p>$&nbsp;{product.price}</p>
                </div>
            </div>


            <hr className={styles.separator} />


            {/* Seccion descripcion del plato */}
            <div>
                <h3>Descripción del plato</h3>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductDetail;