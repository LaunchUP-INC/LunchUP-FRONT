import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { URLD, getMealType, postDish, updateDish } from "../../redux/actions";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import veganIcon from "../../utils/foodTypesIcons/vegan-icon.png";
import vegetarianIcon from "../../utils/foodTypesIcons/vegetarian-icon.png";
import glutenFreeIcon from "../../utils/foodTypesIcons/gluten-free.png";
import dairyFreeIcon from "../../utils/foodTypesIcons/dairy-free.png";
import convencionalIcon from "../../utils/foodTypesIcons/convencional-icon.png";
import { validateName, validatePrice } from "./formValidation";
import styles from "./ProductForm.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    dispatch(getMealType());
  }, [dispatch]);

  const Meal_Types = useSelector((state) => state.mealTypes);


  const [dish, setDish] = useState({
    name: "",
    description: "",
    price: "",
    images: [],
    Meal_Types: []
  });

  const [errors, setErrors] = useState({
    name: "",
    price: "",
  });

  const getProduct = async () =>{
    try {
      if(id){
        const {data}= await axios.get(`${URLD}/dishes/${id}`);
        const types = data.dishDetail.Meal_Types.map(type => type.id.toString());
        data.dishDetail.Meal_Types = types;

        setDish(data.dishDetail);
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = name === "name" ? validateName(value) : validatePrice(value);

    setDish({ ...dish, [name]: value });
    setErrors({ ...errors, [name]: error });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setDish((prevDish) => ({
      ...prevDish,
      Meal_Types: checked
        ? [...prevDish.Meal_Types, value]
        : prevDish.Meal_Types.filter((type) => type !== value)
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setDish(prevDish => ({ ...prevDish, images: [...prevDish.images, ...files] }));
  };

  const handleRemoveImage = (index) => {
    setDish(prevDish => ({
      ...prevDish,
      images: prevDish.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorName = validateName(dish.name);
    const errorPrice = validatePrice(dish.price);
    const newErrors = { name: errorName, price: errorPrice };

    setErrors(newErrors);
    if (!Object.values(newErrors).some(error => error)) {
      try {
        if(id){
          await dispatch(updateDish(id, dish));
          Swal.fire({
            icon: "success",
            title: "Modificacion exitosa",
            text: "Se ha modificado la información del plato",
          })
          setDish({
            name: "",
            description: "",
            price: "",
            images: [],
            Meal_Types: []
          });
          navigate("/admin/products");
        }else{
          await dispatch(postDish(dish));
          Swal.fire({
            icon: "success",
            title: "Creación exitosa",
            text: "Se ha creado el plato con éxito",
          })
          setDish({
            name: "",
            description: "",
            price: "",
            images: [],
            Meal_Types: []
          });
          navigate("/dashboard");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "No se pudo crear el plato",
        })
      }
    }
  };

  const mealTypeIcons = {
    vegan: veganIcon,
    vegetarian: vegetarianIcon,
    'gluten-free': glutenFreeIcon,
    'lactose-free': dairyFreeIcon,
    conventional: convencionalIcon,
  };

  return (

    <Container className={`mt-5 ${styles.containerCustom}`}>
      <Form onSubmit={handleSubmit} >
        <h2>{id ? "Modificar plato" : "Nuevo plato"}</h2>
        <Form.Group as={Row} className="mb-3" controlId="formPlatoNombre">
          <Form.Label column sm="3" className={styles.labelCustom}>Nombre del plato*</Form.Label>
          <Col sm="9">
            <Form.Control type="text" name="name" value={dish.name} onChange={handleChange} isInvalid={!!errors.name} />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlatoPrecio">
          <Form.Label column sm="3" className={styles.labelCustom}>Precio*</Form.Label>
          <Col sm="9">
            <Form.Control type="number" name="price" value={dish.price} onChange={handleChange} isInvalid={!!errors.price} />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3" className={styles.labelCustom}>Descripción del plato</Form.Label>
          <Col sm="9">
            <Form.Control as="textarea" rows={3} name="description" value={dish.description} onChange={handleChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-2">
          <Form.Label column sm="3" className={styles.labelCustom}>Tipo de comida</Form.Label>
          <Col sm="9">
            <Row>
              {Meal_Types.map((type) => (
                <Col xs={12} md={6} className="d-flex align-items-center mb-3" key={type.id}>
                  <Form.Check
                    type="checkbox"
                    label={<span><img src={mealTypeIcons[type.name]} alt={type.name} style={{ width: '24px', marginRight: '5px' }} />{type.name}</span>}
                    name="mealType"
                    value={type.id}
                    checked={dish.Meal_Types.includes(type.id.toString())}
                    onChange={handleCheckboxChange}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3" className={styles.labelCustom}>Agregar imagen</Form.Label>
          <Col sm="9">
            <Form.Control type="file" multiple onChange={handleFileChange} />
            <div className={styles.imagePreview}>
              {dish.images.map((image, index) => (
                <div key={index} className={styles.imageContainer}>
                  <img
                    src={typeof image === "string" ? image : URL.createObjectURL(image)}
                    alt={`Imagen ${index + 1}`}
                    className={styles.previewImage}
                  />
                  <button
                    type="button"
                    className={styles.removeButton}
                    onClick={() => handleRemoveImage(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </Col>
        </Form.Group>


        <Button type="submit" variant="primary" className={styles.btnCustom}>{id ? "Modificar plato" : "Añadir plato"}</Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
