const express = require("express");
const router = express.Router();

const r34 = require("./r34");

router.use("/r34", r34);

module.exports = router;
