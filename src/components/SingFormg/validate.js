export const validate = (formData) => {
  let errors = {};

  if (!formData.name) {
    errors.name = "El nombre es obligatorio";
  } else if (!/^[a-zA-Z\s-]+$/.test(formData.name)) {
    errors.name = "El nombre no puede contener simbolos";
  }

  if (!formData.lastName) {
    errors.lastName = "El apellido es obligatorio";
  } else if (!/^[a-zA-Z\s-]+$/.test(formData.lastName)) {
    errors.lastName = "El apellido no puede contener simbolos";
  }

  if (!formData.phone) {
    errors.phone = "El teléfono es obligatorio";
  } else if (!/^[0-9]{7,15}$/.test(formData.phone)) {
    errors.phone = "El número de teléfono no es válido";
  }

  if (!formData.email) {
    errors.email = "El correo electrónico es obligatorio";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "El correo electrónico no es válido";
  }

  if (!formData.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (formData.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  } else if (
    !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
      formData.password
    )
  ) {
    errors.password =
      "La contraseña debe contener al menos un número, una letra mayúscula, una letra minúscula y un caracter especial";
  }

  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  // Validación de los campos de los comensales (niños)
  if (formData.children.length > 0) {
    formData.children.forEach((child, index) => {
      if (!child.name || !child.age || !child.school || !child.grade) {
        errors.children = `Debe añadir al menos un comensal`;
      }
      if (!child.name) {
        errors.childName = "El nombre del niño/a es obligatorio";
      } else if (!/^[a-zA-Z\s-]+$/.test(child.name)) {
        errors.childName = "El nombre del niño/a no puede contener símbolos";
      }
    
      if (!child.lastName) {
        errors.childLastName = "El apellido del niño/a es obligatorio";
      } else if (!/^[a-zA-Z\s-]+$/.test(child.name)) {
        errors.childLastName = "El apellido del niño/a no puede contener símbolos";
      }
    
      if (!child.school) {
        errors.childSchool = "El nombre de la escuela es obligatorio";
      }
    
      if (!child.grade) {
        errors.childGrade = "El grado/año del niño/a es obligatorio";
      }
    });
  }

  return errors;
};
