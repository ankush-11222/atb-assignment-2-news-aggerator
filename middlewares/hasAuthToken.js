const jwt = require("jsonwebtoken");
const getTokenFromHeaders = require("../utils/utils");

function hasValidAuthToken(req, res, next) {
  try {
    const token = getTokenFromHeaders(req.headers["authorization"]);
    if (!token) return res.status(401).send("Unauthorized");

    let isVerified = jwt.verify(token, process.env.JWT_TOKEN_KEY);
    if (!isVerified) return res.status(401).send("Unauthorized");
    next();
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = hasValidAuthToken;
