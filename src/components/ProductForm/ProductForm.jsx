import { useState } from "react";
import veganIcon from "../../utils/foodTypesIcons/vegan-icon.png";
import vegetarianIcon from "../../utils/foodTypesIcons/vegetarian-icon.png";
import glutenFreeIcon from "../../utils/foodTypesIcons/gluten-free.png";
import dairyFreeIcon from "../../utils/foodTypesIcons/dairy-free.png";
import { validateName, validatePrice } from "./formValidation";

import styles from "./ProductForm.module.css"; // Asegúrate de importar tu archivo CSS

const ProductForm = () => {
  const [dish, setDish] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    Meal_Type: {
      vegan: false,
      vegetarian: false,
      glutenFree: false,
      dairyFree: false,
    },

  })

  const [errors, setErrors] = useState({
    name:"",
    price:"",

  })

  const handleChange = (e) =>{
    const {name, value} = e.target;

    // Validar el campo específico
    let error = "";
    if (name === "name") {
      error = validateName(value);
    } else if (name === "price") {
      error = validatePrice(value);
    }

    //Actualiza el estado del dish
    setDish({
      ...dish,
      [name]:value,
    })

    // Actualiza el estado de los errores
    setErrors({
      ...errors,
      [name]: error,
    });
  }

  const handleCheckboxChange = (e) =>{
    const {name, checked} = e.target;

    setDish((prevDish)=>({
      ...prevDish,
      Meal_Type:{
        ...prevDish.Meal_Type,
        [name]:checked,
      }
    }))
  }



  return (
    <div className={styles.container}>
      <h2>Añadir un nuevo plato</h2>

      <form className={styles.form}>

        {/* Sección para poner el nombre del plato */}
        <div className={styles.formGroup}>
          <label className={styles.labelForm}>Nombre del plato*</label>
          <input type="text" className={styles.inputForm} name="name" value={dish.name} onChange={handleChange}/>
          {errors.name && <p className={styles.error-message}>{errors.name}</p>}
        </div>

        {/* Sección para agregar imagen del plato */}
        <div className={styles.formGroup}>
          <label className={styles.labelForm}>Agregar imágen</label>
          <input type="file" className={styles.inputForm} />
        </div>


        {/* Sección para agregar los tipos del plato */}
        <div className={styles.formGroup}>

          <label className={styles.labelForm}>Tipo de comida</label>
          <div className={styles.iconsContainer}>

            <div className={styles.mealTypeContainer}>
              <img src={veganIcon} alt="Vegano" className={styles.foodTypeIcon} />
              <h3>Vegano</h3>
              <input type="checkbox" name="vegan" checked={dish.Meal_Type.vegan} onChange={handleCheckboxChange} />
            </div>

            <div className={styles.mealTypeContainer}>
              <img src={vegetarianIcon} alt="Vegetariano" className={styles.foodTypeIcon} />
              <h3>Vegetariano</h3>
              <input type="checkbox" name="vegetarian" checked={dish.Meal_Type.vegetarian} onChange={handleCheckboxChange} />
            </div>

            <div className={styles.mealTypeContainer}>
              <img src={glutenFreeIcon} alt="Libre de gluten" className={styles.foodTypeIcon} />
              <h3>Sin gluten</h3>
              <input type="checkbox" name="glutenFree" checked={dish.Meal_Type.glutenFree} onChange={handleCheckboxChange} />
            </div>

            <div className={styles.mealTypeContainer}>
              <img src={dairyFreeIcon} alt="Deslactozado" className={styles.foodTypeIcon} />
              <h3>Deslactozado</h3>
              <input type="checkbox" name="dairyFree" checked={dish.Meal_Type.dairyFree} onChange={handleCheckboxChange} />
            </div>
          </div>
        </div>

        {/* Sección para poner precio al plato */}
        <div className={styles.formGroup}>
          <label className={styles.labelForm}>Precio*</label>
          <input type="number" className={styles.inputForm} name="price" value={dish.price} onChange={handleChange}/>
          {errors.price && <p className={styles.error-message}>{errors.price}</p>}
        </div>

        {/* Sección para agregar una descipción al plato */}
        <div className={styles.formGroup}>
          <label className={styles.labelForm}>Descripción del plato</label>
          <textarea cols="30" rows="10" className={styles.inputForm} name="description" value={dish.description} onChange={handleChange}/>
        </div>

        <button type="submit" className={styles.button}>Añadir plato</button>
      </form>
    </div>
  );
};

export default ProductForm;
