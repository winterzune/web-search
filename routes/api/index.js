const router = require("express").Router();
const wordRoutes = require("./words");

// word routes
router.use("/words", wordsRoutes);

module.exports = router;
