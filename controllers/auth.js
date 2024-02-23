const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginSchema = require("../utils/validators/loginSchema");

async function login(req, res) {
  try {
    let { email, password } = req.body;
    await loginSchema.validate({ email, password });

    //attempt login
    let user = await User.findOne({ email });
    if (!user) return res.send("User not found!").status(404);

    let password_compare_result = bcrypt.compareSync(password, user.password);
    if (!password_compare_result) return res.send("Invalid login credential");

    //generate token
    let token = jwt.sign(
      { name: user.name, email: user.email, id: user.id },
      process.env.JWT_TOKEN_KEY,
    );
    return res
      .status(200)
      .send({ token, userInfo: { name: user.name, email: user.email } });
  } catch (error) {
    return res.send(error.message).status(400);
  }
}

module.exports = { login };
