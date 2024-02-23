const router = require("express").Router();
const {
  getPreferences,
  updatePreferences,
} = require("../../controllers/preferencesController");
const hasValidAuthToken = require("../../middlewares/hasAuthToken");

router.get("/", hasValidAuthToken, getPreferences);
router.put("/", hasValidAuthToken, updatePreferences);

module.exports = router;
