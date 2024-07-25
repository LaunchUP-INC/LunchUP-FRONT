export const validate = (formData) => {
  let errors = {};
  const regex = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

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
  } else if (!regex.test(formData.email)) {
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
      if (!child.firstname || !child.lastname || !child.schoolId || !child.gradeLevel) {
        errors.children = `Debe añadir al menos un comensal`;
      }
      if (!child.firstname) {
        errors.childName = "El nombre del niño/a es obligatorio";
      } else if (!/^[a-zA-Z\s-]+$/.test(child.firstname)) {
        errors.childName = "El nombre del niño/a no puede contener símbolos";
      }

      if (!child.lastname) {
        errors.childLastName = "El apellido del niño/a es obligatorio";
      } else if (!/^[a-zA-Z\s-]+$/.test(child.lastname)) {
        errors.childLastName =
          "El apellido del niño/a no puede contener símbolos";
      }

      if (!child.schoolId) {
        errors.childSchool = "El nombre de la escuela es obligatorio";
      }

      if (!child.gradeLevel) {
        errors.childGrade = "El grado/año del niño/a es obligatorio";
      }
    });
  }

  return errors;
};
