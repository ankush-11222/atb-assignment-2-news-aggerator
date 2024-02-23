const yup = require("yup");

const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required().max(20),
  password: yup.string().required().min(8),
});

module.exports = userSchema;
