

export const validateName = (name) => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    if (!name) {
        return "Nombre del plato obligatorio";
    }
    if (!nameRegex.test(name)) {
        return "El nombre del plato debe contener letras y espacios";
    }
    return "";

}

export const validatePrice = (price) => {
    if (!price) {
        return "Precio del plato obligatorio";
    }
    if (isNaN(price) || price <= 0) {
        return "El precio debe ser mayor a 0";
    }
    return "";

}