import React, {useEffect} from 'react';
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
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = (props) => {
  const dispatch = useDispatch();

  const { name, images, description, price, Meal_Types } = props.productDetail;

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