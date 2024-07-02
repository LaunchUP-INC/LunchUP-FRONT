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

  if (!formData.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (formData.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = "La confirmación de la contraseña es obligatoria";
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  return errors;
};
