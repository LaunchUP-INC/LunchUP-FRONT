import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../index.css";
import styles from "./ProductDetail.module.css";
import veganIcon from "../../utils/foodTypesIcons/vegan-icon.png";
import vegetarianIcon from "../../utils/foodTypesIcons/vegetarian-icon.png";
import glutenFreeIcon from "../../utils/foodTypesIcons/gluten-free.png";
import dairyFreeIcon from "../../utils/foodTypesIcons/dairy-free.png";
import conventionalIcon from "../../utils/foodTypesIcons/convencional-icon.png";
import { addToShoppingCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


const ProductDetail = (props) => {
  const dispatch = useDispatch();

  const { name, image, description, price, Meal_Type, vegan, vegetarian, glutenFree, dairyFree } = props.productDetail;


  const handleAddToCart = () =>{
    dispatch(addToShoppingCart(props.productDetail));
  }

  return (
    <div className={styles.mainContainer}>
      {/* Sección de imágenes del plato */}
      <div className={styles.dishInfo}>
        <div className={styles.imageContainer}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={image}
                alt={name}
                className={styles.dishImage}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Sección informativa del plato */}
        <div>
          <h2 className={styles.mealName}>{name}</h2>
          <h3>Tipo de plato</h3>
          {Meal_Type === "conventional" ? (
            <div className={styles.mealTypeContainer}>
              <img
                src={conventionalIcon}
                alt="conventional"
                className={styles.foodTypeIcon}
              />
              <p>Convencional</p>
            </div>
          ) : (
            (vegan || vegetarian || glutenFree || dairyFree) && (
              <div className={styles.iconsContainer}>
                {vegan && (
                  <div className={styles.mealTypeContainer}>
                    <img
                      src={veganIcon}
                      alt="vegan"
                      className={styles.foodTypeIcon}
                    />
                    <p>Vegano</p>
                  </div>
                )}
                {vegetarian && (
                  <div className={styles.mealTypeContainer}>
                    <img
                      src={vegetarianIcon}
                      alt="vegetarian"
                      className={styles.foodTypeIcon}
                    />
                    <p>Vegetariano</p>
                  </div>
                )}
                {glutenFree && (
                  <div className={styles.mealTypeContainer}>
                    <img
                      src={glutenFreeIcon}
                      alt="gluten-free"
                      className={styles.foodTypeIcon}
                    />
                    <p>Sin gluten</p>
                  </div>
                )}
                {dairyFree && (
                  <div className={styles.mealTypeContainer}>
                    <img
                      src={dairyFreeIcon}
                      alt="dairy-free"
                      className={styles.foodTypeIcon}
                    />
                    <p>Deslactozado</p>
                  </div>
                )}
              </div>
            )
          )}

          <h3>Tipo horario</h3>
          <p>{Meal_Type && Meal_Type.name}</p>

          <h3>Precio</h3>
          <p>$&nbsp;{price}</p>

        </div>

        <div>
          <button onClick={handleAddToCart} ><FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>

      <hr className={styles.separator} />

      {/* Sección descripción del plato */}
      <div>
        <h3>Descripción del plato</h3>
        <p>{description}</p>
      </div>

    </div>
  );
};

export default ProductDetail;
