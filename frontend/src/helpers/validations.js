const required = { value: true, message: "Este campo es obligatorio." };

const textPattern = () => {
  return {
    value: /^[a-zA-Z ]+$/,
    message: "No puede contener numeros ni caracteres especiales",
  };
};

const passwordPattern = () => {
  return {
    value:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    message:
      "Debe contar con minimo 1 Letra mayúscula, 1 Minúscula, 1 Número y un caracter especial ",
  };
};

const minVal = (minValue) => {
  return {
    value: minValue,
    message: `debe ser almenos de ${minValue} caracteres`,
  };
};

const maxVal = (maxValue) => {
  return {
    value: maxValue,
    message: `debe ser mayor a ${maxValue} caracteres`,
  };
};

export function handleValidation(inputType) {
  let validations;
  const password = () =>
    (document.getElementById("password")).value;

  switch (inputType) {
    case "name":
      validations = {
        required,
        minLength: minVal(3),
        maxLength: maxVal(40),
        pattern: textPattern(),
      };
      break;
    case "email":
      validations = {
        required
      }
      break;
    case "password":
      validations = {
        required,
        minLength: minVal(8),
        maxLength: maxVal(20),
        pattern: passwordPattern(),
      };
      break;
    case "confirmpass":
      validations = {
        validate: (value) =>
          value === password() || "Las contraseñas no coinciden",
      };
      break;
    default:
      break;
  }

  return validations;
}

