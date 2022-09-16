import validator from "validator";

export const validForm = (userName = "", email = "", password = '') => {
  if (userName?.trim().length === 0) {
    return {
      state: false,
      error: true,
      msgError: "name is required",
    };
  }

  if (!validator.isEmail(email)) {
    return {
      state: false,
      error: true,
      msgError: "email is invalid",
    };
  }

  if (password.length < 5) {
    return {
      state: false,
      error: true,
      msgError: "password should be at least 6 characters",
    };
  }

  return true;
};
