import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
import { toast } from "react-toastify";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);

  const { id, name, images, description, price, Meal_Types, stock } = props.productDetail;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const productToAdd = shoppingCart.find((prod) => prod.id === id);
    
    if (stock) {
      if (productToAdd) {
        if (productToAdd.quantity < stock) {
          dispatch(addToShoppingCart(props.productDetail));
        } else {
          toast.error("Máximo de stock alcanzado.");
        }
      } else {
        dispatch(addToShoppingCart(props.productDetail)); // Si el producto no está en el carrito, lo agrega
      }
    } else {
      toast.error("No hay stock disponible de momento");
    }

  };

  const handleMealType = (type) => {
    switch (type) {
      case "vegan":
        return "Vegano";
      case "vegetarian":
        return "Vegetariano";
      case "gluten-free":
        return "Sin gluten";
      case "lactose-free":
        return "Sin lactosa";
      default:
        return "Convencional";
    }
  };

  const mealTypeIcons = {
    vegan: veganIcon,
    vegetarian: vegetarianIcon,
    "gluten-free": glutenFreeIcon,
    "lactose-free": dairyFreeIcon,
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
                <img
                  src={image}
                  alt={name}
                  className={`img-fluid ${styles.dishImage}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col md={6}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }} className={styles.mealName}>{name}</h2>
          <h4>Tipo de plato</h4>
          {Meal_Types.map((type) => (
            <div key={type.id} className="d-flex align-items-center mb-2">
              <img
                src={mealTypeIcons[type.name]}
                alt={type.name}
                className={`${styles.foodTypeIcon} mr-2`}
              />
              <p className="mb-0">&nbsp;{handleMealType(type.name)}</p>
            </div>
          ))}
          <h4>Precio</h4>
          <p>$&nbsp;{price}</p>
          <Button variant="primary" onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faCartPlus} /> Añadir al carrito
          </Button>
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "30px",
          gap: "5px",
          alignItems: "center",
          margin: "0 auto",
          padding: "5px",
        }}
      >
        <img style={{ width: "150px" }} src="/separator.png" alt="forks" />
        <img style={{ width: "150px" }} src="/separator.png" alt="forks" />
        <img style={{ width: "150px" }} src="/separator.png" alt="forks" />
        <img style={{ width: "150px" }} src="/separator.png" alt="forks" />
        <img style={{ width: "150px" }} src="/separator.png" alt="forks" />
      </div>
      <Row>
        <Col>
          <h3 >Descripción del plato</h3>
          <p style={{ fontSize: "1.5rem", textWrap: "balance" }}>{description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
