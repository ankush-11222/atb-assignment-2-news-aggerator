const router = require("express").Router();
const { createUser, getUsers } = require("../../controllers/usersController");
const hasValidAuthToken = require("../../middlewares/hasAuthToken");

router.post("/", createUser);
router.get("/", hasValidAuthToken, getUsers);

module.exports = router;
