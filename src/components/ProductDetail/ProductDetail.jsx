import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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

  const { name, images, description, price, Meal_Types } = props.productDetail;
  console.log(props.productDetail);

  const handleAddToCart = () => {
    dispatch(addToShoppingCart(props.productDetail));
  }

  const mealTypeIcons = {
    vegan: veganIcon,
    vegetarian: vegetarianIcon,
    'gluten-free': glutenFreeIcon,
    'lactose-free': dairyFreeIcon,
    conventional: conventionalIcon,
  };

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col md={6}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={name} className={`img-fluid ${styles.dishImage}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col md={6}>
          <h2 className={styles.mealName}>{name}</h2>
          <h3>Tipo de plato</h3>
          {Meal_Types.map((type) => (
            <div key={type.id} className="d-flex align-items-center mb-2">
              <img src={mealTypeIcons[type.name]} alt={type.name} className={`${styles.foodTypeIcon} mr-2`} />
              <p className="mb-0">&nbsp;{type.name}</p>
            </div>
          ))}
          <h3>Precio</h3>
          <p>$&nbsp;{price}</p>
          <Button variant="primary" onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faCartPlus} /> Añadir al carrito
          </Button>
        </Col>
      </Row>
      <hr className={styles.separator} />
      <Row>
        <Col>
          <h3>Descripción del plato</h3>
          <p>{description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../../index.css";
// import styles from "./ProductDetail.module.css";
// import veganIcon from "../../utils/foodTypesIcons/vegan-icon.png";
// import vegetarianIcon from "../../utils/foodTypesIcons/vegetarian-icon.png";
// import glutenFreeIcon from "../../utils/foodTypesIcons/gluten-free.png";
// import dairyFreeIcon from "../../utils/foodTypesIcons/dairy-free.png";
// import conventionalIcon from "../../utils/foodTypesIcons/convencional-icon.png";
// import { addToShoppingCart } from "../../redux/actions";
// import { useDispatch } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


// const ProductDetail = (props) => {
//   const dispatch = useDispatch();

//   const { name, images, description, price, Meal_Types} = props.productDetail;
//   console.log(props.productDetail);


//   const handleAddToCart = () => {
//     dispatch(addToShoppingCart(props.productDetail));
//   }

//   const mealTypeIcons = {
//     vegan: veganIcon,
//     vegetarian: vegetarianIcon,
//     'gluten-free': glutenFreeIcon,
//     'lactose-free': dairyFreeIcon,
//     conventional: conventionalIcon,
//   };

//   return (
//     <div className={styles.mainContainer}>
//       {/* Sección de imágenes del plato */}
//       <div className={styles.dishInfo}>
//         <div className={styles.imageContainer}>
//           <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={10}
//             slidesPerView={1}
//             navigation
//             centeredSlides={true}
//             pagination={{ clickable: true }}
//             className="mySwiper" >
//               {images.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <img src={image} alt={name} className={styles.dishImage} />
//                 </SwiperSlide>
//               ))}
//           </Swiper>
//         </div>

//         {/* Sección informativa del plato */}
//         <div>
//           <h2 className={styles.mealName}>{name}</h2>
//           <h3>Tipo de plato</h3>
//           {Meal_Types.map((type)=>{
//            return( <div key={type.id}>
//               <img src={mealTypeIcons[type.name]} alt={type.name} className={styles.foodTypeIcon}/>
//               <p>{type.name}</p>
//             </div>)

//           })}

//           <h3>Precio</h3>
//           <p>$&nbsp;{price}</p>

//         </div>

//         <div>
//           <button onClick={handleAddToCart} ><FontAwesomeIcon icon={faCartPlus} /></button>
//         </div>
//       </div>

//       <hr className={styles.separator} />

//       {/* Sección descripción del plato */}
//       <div>
//         <h3>Descripción del plato</h3>
//         <p>{description}</p>
//       </div>

//     </div>
//   );
// };

// export default ProductDetail;
