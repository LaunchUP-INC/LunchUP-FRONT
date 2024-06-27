

const ProductForm = () =>{

    return(
        <>
            <h2>Añadir un producto</h2>

            <form action="">
                <label htmlFor="">Nombre del producto</label>
                <input type="text" />

                <label htmlFor="">Agregar imagen</label>
                <input type="file" />

                <label htmlFor="">Precio</label>
                <input type="number" />

                <label htmlFor="">Descripcion</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                
            </form>
        </>
    )

}

export default ProductForm;