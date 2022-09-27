import validator from "validator";

export const validForm = (userName = "", email = "", password = "") => {
  if (userName?.trim().length === 0) {
    return {
      stateError: false,
      errorForm: true,
      messgError: "Name is required",
    };
  }

  if (!validator.isEmail(email)) {
    return {
      stateError: false,
      errorForm: true,
      messgError: "Email is invalid",
    };
  }

  if (password.length < 5) {
    return {
      stateError: false,
      errorForm: true,
      messgError: "Password should be at least 6 characters",
    };
  }

  return true;
};
