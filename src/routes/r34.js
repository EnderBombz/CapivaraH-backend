const express = require("express");
const router = express.Router();
const r34Controller = require("../controllers/r34");

router.get("/find-id/:id", r34Controller.postById);
router.get("/search", r34Controller.postByTags);
router.get("/posts-length", r34Controller.postLength);
router.get("/posts", r34Controller.lastPosts);

module.exports = router;
