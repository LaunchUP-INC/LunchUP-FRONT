import styles from "./ProductForm.module.css"; // Asegúrate de importar tu archivo CSS

const ProductForm = () => {
  return (
    <div className={styles.container}>
      <h2>Añadir un nuevo producto</h2>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.labelForm}>Nombre del producto</label>
          <input type="text" className={styles.inputForm} />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.labelForm}>Agregar imágen</label>
          <input type="file" className={styles.inputForm}/>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.labelForm}>Precio</label>
          <input type="number" className={styles.inputForm}/>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.labelForm}>Descripción</label>
          <textarea cols="30" rows="10" className={styles.inputForm}></textarea>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.labelForm}>Tipo de comida</label>
          <select>
            <option value="Convencional">Convencional</option>
            <option value="Vegano">Vegano</option>
            <option value="Vegetariano">Vegetariano</option>
            <option value="Libre de gluten">Libre de glúten</option>
          </select>
        </div>

        <button type="submit" className={styles.button}>Añadir producto</button>
      </form>
    </div>
  );
};

export default ProductForm;
