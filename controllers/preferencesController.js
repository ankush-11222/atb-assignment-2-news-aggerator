const mongoose = require("mongoose");
const User = require("../models/User");
const getTokenFromHeaders = require("../utils/utils");
const jwt = require("jsonwebtoken");

async function getPreferences(req, res) {
  try {
    const token = getTokenFromHeaders(req.headers["authorization"]);

    let decodedTokenData = jwt.decode(token);

    let user = await User.findById(decodedTokenData.id);
    return res.status(200).json(user.preferences);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updatePreferences(req, res) {
  try {
    let { preferences } = req.body;
    const token = getTokenFromHeaders(req.headers["authorization"]);

    let decodedTokenData = jwt.decode(token);

    await User.findByIdAndUpdate(decodedTokenData.id, {
      preferences,
    });

    return res.status(200).send("Preferences updated successfully");
  } catch (error) {}
}

module.exports = { getPreferences, updatePreferences };
