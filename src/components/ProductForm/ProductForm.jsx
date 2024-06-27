

const ProductForm = () =>{

    return(
        <>
            <h2>Añadir un nuevo producto</h2>

            <form action="">
                <label htmlFor="">Nombre del producto</label>
                <input type="text" />

                <label htmlFor="">Agregar imagen</label>
                <input type="file" />

                <label htmlFor="">Precio</label>
                <input type="number" />

                <label htmlFor="">Descripcion</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                
                <label htmlFor="">Tipo de comida</label>
                <select name="" id="">
                    <option value="">Convencional</option>
                    <option value="">Vegano</option>
                    <option value="">Vegetariano</option>
                    <option value="">Libre de gluten</option>
                </select>

                <button type="submit">Añadir producto</button>
            </form>
        </>
    )

}

export default ProductForm;