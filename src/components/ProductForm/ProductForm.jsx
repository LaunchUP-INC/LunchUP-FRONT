import styles from "./ProductForm.module.css"; // Asegúrate de importar tu archivo CSS

const ProductForm = () => {
  return (
    <div className={styles.container}>
      <h2>Añadir un nuevo producto</h2>

      <form>
        <div className={styles.formGroup}>
          <label>Nombre del producto</label>
          <input type="text" />
        </div>

        <div className={styles.formGroup}>
          <label>Agregar imágen</label>
          <input type="file" />
        </div>

        <div className={styles.formGroup}>
          <label>Precio</label>
          <input type="number" />
        </div>

        <div className={styles.formGroup}>
          <label>Descripción</label>
          <textarea cols="30" rows="10"></textarea>
        </div>

        <div className={styles.formGroup}>
          <label>Tipo de comida</label>
          <select>
            <option value="Convencional">Convencional</option>
            <option value="Vegano">Vegano</option>
            <option value="Vegetariano">Vegetariano</option>
            <option value="Libre de gluten">Libre de glúten</option>
          </select>
        </div>

        <button type="submit">Añadir producto</button>
      </form>
    </div>
  );
};

export default ProductForm;
