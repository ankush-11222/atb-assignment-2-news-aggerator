const User = require("../models/User");
const axios = require("axios");
const getTokenFromHeaders = require("../utils/utils");
const jwt = require("jsonwebtoken");

async function getPreferedNews(req, res) {
  try {
    const token = getTokenFromHeaders(req.headers["authorization"]);
    let { id } = jwt.decode(token);

    let { preferences } = await User.findById(id);

    preferences = preferences.join("%20OR%20");

    let { data } = await axios.get(
      `${process.env.NEWS_API_URL}?q=${preferences}&apiKey=${process.env.NEWS_API_KEY}`,
    );
    let news = data.articles;

    return res.status(200).json(news);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = { getPreferedNews };
