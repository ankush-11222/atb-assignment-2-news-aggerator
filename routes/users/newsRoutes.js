const router = require("express").Router();
const { getPreferedNews } = require("../../controllers/newsController");
const hasValidAuthToken = require("../../middlewares/hasAuthToken");

router.get("/", hasValidAuthToken, getPreferedNews);

module.exports = router;
