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



const ProductDetail = (props) => {

    const { id, name, images, price, description, Meal_Type, vegetarian, vegan, glutenFree, dairyFree, preparationTime, servings } = props.product;

    console.log(props.product);

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
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`${name} image ${index + 1}`} className={styles.dishImage} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                {/* Seccion informativa del plato */}
                <div>
                    <h2 className={styles.mealName}>{name}</h2>
                    <h3>Tipo de plato</h3>
                    {!vegan && !vegetarian && !glutenFree && !dairyFree ?
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

                    <h3>Tipo horario</h3>
                    <p>{Meal_Type.name}</p>

                    <h3>Precio</h3>
                    <p>$&nbsp;{price}</p>
                </div>
            </div>


            <hr className={styles.separator} />


            {/* Seccion descripcion del plato */}
            <div>
                <h3>Descripción del plato</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProductDetail;