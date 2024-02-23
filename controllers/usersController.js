const bcrypt = require("bcrypt");

const User = require("../models/User");
const userSchema = require("../utils/validators/userValidatorSchema");

async function createUser(req, res) {
  try {
    let { name, email, password, preferences } = req.body;
    await userSchema.validate({ name, email, password, preferences });

    //encrypt the password

    password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    //Store users to db
    let user = new User({
      name,
      email,
      password,
      preferences,
    });
    let result = await user.save();
    console.log(result);
    res.status(201).send("user created successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getUsers(req, res) {
  try {
    let users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = { createUser, getUsers };
