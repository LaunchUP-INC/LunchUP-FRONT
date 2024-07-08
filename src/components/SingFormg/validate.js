export const validate = (formData) => {
  const errors = {};

  if (!formData.name) {
    errors.name = "El nombre es obligatorio";
  } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
    errors.name = "El nombre solo puede contener letras y espacios";
  }

  if (!formData.lastName) {
    errors.lastName = "El apellido es obligatorio";
  } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
    errors.lastName = "El apellido solo puede contener letras y espacios";
  }

  if (!formData.email) {
    errors.email = "El email es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "El email es inválido";
  }

  if (!formData.phone) {
    errors.phone = "El teléfono es obligatorio";
  } else if (!/^[0-9]+$/.test(formData.phone)) {
    errors.phone = "El teléfono solo puede contener números";
  } else if (formData.phone.length > 15) {
    errors.phone = "El teléfono no debe superar los 15 caracteres";
  } else if (formData.phone.length < 10) {
    errors.phone = "El teléfono no debe tener menos de 11 caracteres";
  }

  if (!formData.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (formData.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = "La confirmación es obligatoria";
  } else if (formData.confirmPassword !== formData.password) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  if (formData.children) {
    formData.children.forEach((child) => {
      if (!child.name) {
        errors.childName = "La escuela es obligatoria";
        errors.children = "Debe agregar al menos un comensal";
      } else if (!/^[a-zA-Z\s]+$/.test(child.school)) {
        errors.childName = "La escuela solo puede contener letras y espacios";
      }

      if (!child.age) {
        errors.childAge = "La edad es obligatoria";
        errors.children = "Debe agregar al menos un comensal";
      } else if (!/^[0-9]+$/.test(child.age)) {
        errors.childAge = "La edad solo puede contener números";
      }

      if (!child.school) {
        errors.childSchool = "La escuela es obligatoria";
        errors.children = "Debe agregar al menos un comensal";
      } else if (!/^[a-zA-Z\s]+$/.test(child.school)) {
        errors.childSchool = "La escuela solo puede contener letras y espacios";
      }

      if (!child.grade) {
        errors.childGrade = "El grado es obligatorio";
        errors.children = "Debe agregar al menos un comensal";
      } else if (!/^[0-9]+$/.test(child.age)) {
        errors.childAge = "La edad solo puede contener números";
      }
    });
  } else {
    errors.children = "Debe agregar al menos un comensal";
  }

  return errors;
};
