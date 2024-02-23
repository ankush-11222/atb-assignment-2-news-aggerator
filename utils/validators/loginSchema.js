const yup = require("yup");

const loginSchema = yup.object().shape({
  email: yup.string().email().required().max(20),
  password: yup.string().required().min(8),
});

module.exports = loginSchema;
