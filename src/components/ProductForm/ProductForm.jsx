import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import veganIcon from "../../utils/foodTypesIcons/vegan-icon.png";
import vegetarianIcon from "../../utils/foodTypesIcons/vegetarian-icon.png";
import glutenFreeIcon from "../../utils/foodTypesIcons/gluten-free.png";
import dairyFreeIcon from "../../utils/foodTypesIcons/dairy-free.png";
import { validateName, validatePrice } from "./formValidation";

import styles from "./ProductForm.module.css"; // Asegúrate de importar tu archivo CSS
import { postDish } from "../../redux/actions";

const ProductForm = () => {
  // const dispatch = useDispatch();

  // //Estado del plato que se posteara
  // const [dish, setDish] = useState({
  //   name: "",
  //   description: "",
  //   price: "",
  //   images: [],
  //   Meal_Type: {
  //     vegan: false,
  //     vegetarian: false,
  //     glutenFree: false,
  //     dairyFree: false,
  //   },
  //   mealTime: "",
  // });
  // console.log(dish);

  // //Estado de la validacion de errores
  // const [errors, setErrors] = useState({
  //   name: "",
  //   price: "",
  // });

  // //Funcion que actualiza el estado dish con datos ingrazados
  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   // Validar el campo específico
  //   let error = "";
  //   if (name === "name") {
  //     error = validateName(value);
  //   } else if (name === "price") {
  //     error = validatePrice(value);
  //   }

  //   //Actualiza el estado del dish
  //   setDish({
  //     ...dish,
  //     [name]: value,
  //   });

  //   // Actualiza el estado de los errores
  //   setErrors({
  //     ...errors,
  //     [name]: error,
  //   });
  // };

  // //Funcion que actualiza el objeto con los mealTypes
  // const handleCheckboxChange = (e) => {
  //   const { name, checked } = e.target;

  //   setDish((prevDish) => ({
  //     ...prevDish,
  //     Meal_Type: {
  //       ...prevDish.Meal_Type,
  //       [name]: checked,
  //     },
  //   }));
  // };

  // //Funcion que agrega las imagenes del plato al array de imagenes
  // const handleFileChange = (e) => {
  //   const files = Array.from(e.target.files);

  //   setDish((prevDish) => ({
  //     ...prevDish,
  //     images: [...prevDish.images, ...files],
  //   }));
  // };

  // //Funcion para hacer el submit del form
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Validar todos los campos obligatorios
  //   const errorName = validateName(dish.name);
  //   const errorPrice = validatePrice(dish.price);

  //   // Establecer errores
  //   const newErrors = {
  //     name: errorName,
  //     price: errorPrice,
  //   };

  //   setErrors(newErrors);

  //   // Verificar si hay errores
  //   const hasErrors = Object.values(newErrors).some((error) => error);

  //   if (!hasErrors) {
  //     dispatch(postDish(dish));
  //   }
  // };

  // return (
  //   <div className={styles.container}>
  //     <form className={styles.form} onSubmit={handleSubmit}>
  //       {/* Sección para poner el nombre del plato */}
  //       <div className={styles.formGroup}>
  //         <label className={styles.labelForm}>Nombre del plato*</label>
  //         <input
  //           type="text"
  //           className={styles.inputForm}
  //           name="name"
  //           value={dish.name}
  //           onChange={handleChange}
  //         />
  //         <div className={styles.errorContainer}>
  //           {errors.name && (
  //             <p className={styles.errorMessage}>{errors.name}</p>
  //           )}
  //         </div>
  //       </div>

  //       {/* Sección para poner precio al plato */}
  //       <div className={styles.formGroup}>
  //         <label className={styles.labelForm}>Precio*</label>
  //         <input
  //           type="number"
  //           className={styles.inputForm}
  //           name="price"
  //           value={dish.price}
  //           onChange={handleChange}
  //         />
  //         <div className={styles.errorContainer}>
  //           {errors.price && (
  //             <p className={styles.errorMessage}>{errors.price}</p>
  //           )}
  //         </div>
  //       </div>

  //       {/* Sección para agregar una descipción al plato */}
  //       <div className={styles.formGroup}>
  //         <label className={styles.labelForm}>Descripción del plato</label>
  //         <textarea
  //           cols="30"
  //           rows="10"
  //           className={styles.inputForm}
  //           name="description"
  //           value={dish.description}
  //           onChange={handleChange}
  //         />
  //       </div>

  //       {/* Sección para agregar los tipos del plato */}
  //       <div className={styles.formGroupMeal}>
  //         <label className={styles.labelForm}>Tipo de comida</label>
  //         <div className={styles.iconsContainer}>
  //           <div className={styles.mealTypeContainer}>
  //             <img
  //               src={veganIcon}
  //               alt="Vegano"
  //               className={styles.foodTypeIcon}
  //             />
  //             <h3>Vegano</h3>
  //             <input
  //               type="radio"
  //               name="vegan"
  //               checked={dish.Meal_Type.vegan}
  //               onChange={handleCheckboxChange}
  //             />
  //           </div>

  //           <div className={styles.mealTypeContainer}>
  //             <img
  //               src={vegetarianIcon}
  //               alt="Vegetariano"
  //               className={styles.foodTypeIcon}
  //             />
  //             <h3>Vegetariano</h3>
  //             <input
  //               type="radio"
  //               name="vegetarian"
  //               checked={dish.Meal_Type.vegetarian}
  //               onChange={handleCheckboxChange}
  //             />
  //           </div>

  //           <div className={styles.mealTypeContainer}>
  //             <img
  //               src={glutenFreeIcon}
  //               alt="Libre de gluten"
  //               className={styles.foodTypeIcon}
  //             />
  //             <h3>Sin gluten</h3>
  //             <input
  //               type="radio"
  //               name="glutenFree"
  //               checked={dish.Meal_Type.glutenFree}
  //               onChange={handleCheckboxChange}
  //             />
  //           </div>

  //           <div className={styles.mealTypeContainer}>
  //             <img
  //               src={dairyFreeIcon}
  //               alt="Deslactozado"
  //               className={styles.foodTypeIcon}
  //             />
  //             <h3>Deslactozado</h3>
  //             <input
  //               type="radio"
  //               name="dairyFree"
  //               checked={dish.Meal_Type.dairyFree}
  //               onChange={handleCheckboxChange}
  //             />
  //           </div>
  //         </div>
  //       </div>

  //       {/* Seccion tipo horario */}
  //       <div className={styles.formGroupMeal}>
  //         <label>Tipo horario</label>
  //         <select
  //           className={styles.select}
  //           name="mealTime"
  //           value={dish.mealTime}
  //           onChange={handleChange}
  //         >
  //           <option value="" disabled>
  //             Seleccione una opcion
  //           </option>
  //           <option value="Breakfast">Desayuno</option>
  //           <option value="Lunch">Almuerzo</option>
  //           <option value="Snack">Merienda</option>
  //           <option value="Dinner">Cena</option>
  //         </select>
  //       </div>

  //       {/* Sección para agregar imagen del plato */}
  //       <div className={styles.formGroup}>
  //         <label className={styles.labelForm}>Agregar imágen</label>
  //         <input
  //           type="file"
  //           className={styles.inputForm}
  //           multiple
  //           onChange={handleFileChange}
  //         />
  //         <div className={styles.imagePreview}>
  //           {dish.images.length > 0 ? (
  //             dish.images.map((image, index) => (
  //               <img
  //                 key={index}
  //                 src={URL.createObjectURL(image)}
  //                 alt={`Imagen ${index + 1}`}
  //                 className={styles.previewImage}
  //               />
  //             ))
  //           ) : (
  //             <p className={styles.previewText}>
  //               Aqui podras previsualizar las imagenes del plato...
  //             </p>
  //           )}
  //         </div>
  //       </div>

  //       <button type="submit" className={styles.button}>
  //         Añadir plato
  //       </button>
  //     </form>
  //   </div>
  // );


//BOOTSTRAP
const dispatch = useDispatch();
const [dish, setDish] = useState({
  name: "",
  description: "",
  price: "",
  images: [],
  Meal_Type: {
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    dairyFree: false,
  },
  mealTime: "",
});

const [errors, setErrors] = useState({
  name: "",
  price: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  let error = name === "name" ? validateName(value) : validatePrice(value);

  setDish({ ...dish, [name]: value });
  setErrors({ ...errors, [name]: error });
};

const handleCheckboxChange = (e) => {
  const { value } = e.target;
  
  setDish((prevDish) => ({
    ...prevDish,
    Meal_Type: {
      vegan: value === 'vegan',
      vegetarian: value === 'vegetarian',
      glutenFree: value === 'glutenFree',
      dairyFree: value === 'dairyFree',
    },
  }));
};

const handleFileChange = (e) => {
  const files = Array.from(e.target.files);
  setDish(prevDish => ({ ...prevDish, images: [...prevDish.images, ...files] }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const errorName = validateName(dish.name);
  const errorPrice = validatePrice(dish.price);
  const newErrors = { name: errorName, price: errorPrice };

  setErrors(newErrors);
  if (!Object.values(newErrors).some(error => error)) {
    dispatch(postDish(dish));
  }
};

return (
  <Container className={`mt-5 ${styles.containerCustom}`}>
  <Form onSubmit={handleSubmit}>
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
        <Form.Label column sm="3">Precio*</Form.Label>
        <Col sm="9">
          <Form.Control type="number" name="price" value={dish.price} onChange={handleChange} isInvalid={!!errors.price} />
          <Form.Control.Feedback type="invalid">
            {errors.price}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">Descripción del plato</Form.Label>
        <Col sm="9">
          <Form.Control as="textarea" rows={3} name="description" value={dish.description} onChange={handleChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-2">
          <Form.Label column sm="3">Tipo de comida</Form.Label>
          <Col sm="9" className="d-flex align-items-center">
            {[
              { label: "Vegano", value: "vegan", icon: veganIcon },
              { label: "Vegetariano", value: "vegetarian", icon: vegetarianIcon },
              { label: "Sin gluten", value: "glutenFree", icon: glutenFreeIcon },
              { label: "Deslactozado", value: "dairyFree", icon: dairyFreeIcon },
            ].map((type, index) => (
              <div key={index} className="me-3">
                <Form.Check
                  type="radio"
                  label={<span><img src={type.icon} alt={type.label} style={{ width: '24px', marginRight: '5px' }} />{type.label}</span>}
                  name="mealType"
                  value={type.value}
                  checked={dish.Meal_Type[type.value]}
                  onChange={handleCheckboxChange}
                  custom
                />
              </div>
            ))}
          </Col>
        </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">Agregar imagen</Form.Label>
        <Col sm="9">
          <Form.Control type="file" multiple onChange={handleFileChange} />
        </Col>
      </Form.Group>

      <Button type="submit" variant="primary" className={styles.btnCustom}>Añadir plato</Button>
      </Form>
  </Container>
);
};

export default ProductForm;
