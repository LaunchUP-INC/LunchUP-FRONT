export const validate = (child) => {
  let errors = {};

  // Validación de los campos de los comensales (niños)
  if (!child.firstname) {
    errors.childName = "El nombre del niño/a es obligatorio";
  } else if (!/^[a-zA-Z\s-]+$/.test(child.name)) {
    errors.childName =
      "El nombre del niño/a no puede contener símbolos ni números";
  }

  if (!child.lastname) {
    errors.childLastName = "El apellido del niño/a es obligatorio";
  } else if (!/^[a-zA-Z\s-]+$/.test(child.lastName)) {
    errors.childLastName =
      "El apellido del niño/a no puede contener símbolos ni números";
  }

  if (!child.SchoolId) {
    errors.childSchool = "La escuela es obligatorio";
  }

  if (!child.gradeLevel) {
    errors.childGrade = "El grado/año del niño/a es obligatorio";
  }

  return errors;
};
